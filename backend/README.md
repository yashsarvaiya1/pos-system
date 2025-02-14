## Index

- [Steps to Set Up the Project](#steps-to-set-up-the-project)
- [Set Up Editor for Git Commit Messages](#set-up-editor-for-git-commit-messages)


### Steps to Set Up the Project

1. Create a virtual environment:
  ```sh
  python -m venv venv
  source venv/bin/activate  # On Windows use: venv\Scripts\activate
  ```

2. Install the required packages:
  ```sh
  pip install -r requirements.txt
  ```

3. Make sure to add the `.env` file with the present database configuration (contact me for the `.env` file for development).

4. Test that the backend is working:

  - Create migrations (make sure to change the directory to where `manage.py` exists):
    ```sh
    python manage.py migrate
    ```

  - Create a superuser:
    ```sh
    python manage.py createsuperuser
    ```
    Use `admin` as both username and password (you can change this if you prefer).

  - Run the server:
    ```sh
    python manage.py runserver
    ```

  - If no errors are shown, congratulations, it's working fine. For testing, go to:
    [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)


### Set Up Editor for Git Commit Messages

To set up your editor to edit commit messages in Git, use the following command:
```sh
git config --global core.editor "code --wait"
```


