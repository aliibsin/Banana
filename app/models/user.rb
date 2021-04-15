class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :projects,
    foreign_key: :creator_id,
    class_name: :Project

  has_many :sections,
    through: :projects,
    source: :sections

  has_many :tasks,
    foreign_key: :creator_id,
    class_name: :Task


  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil if @user.nil?
    return @user if @user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end
end
