Feature: The Internet Guinea Pig Website

  Background:
    When I open login page

  Scenario Outline: As a user, I can log into the secure area
    When I login with <username> and <password>
    Then I should see a user icon

    Examples:
      | username            | password     |
      | ipisaryev@gmail.com | 31101967Serg |

  Scenario Outline: As a user, I can't log in with non-existing email
    When I login with <username> and <password>
    Then I should see a notification with text <message>

    Examples:
      | username          | password  | message                 |
      | example@gmail.com | example   | Email is not registered |

  Scenario Outline: As a user, I can't log in with incorrect password
    When I login with <username> and <password>
    Then I should see a notification with text <message>

    Examples:
      | username             | password  | message            |
      | ipisaryev@gmail.com  | example   | Incorrect password |

  Scenario Outline: As a user, I should see that credential field are required
    When I enter username <username> and clear it
    Then I should see validation error for username field
    When I enter password <password> and clear it
    Then I should see validation error for password field

    Examples:
      | username             | password  |
      | invalid@example.com  | invalid   |

