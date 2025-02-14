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

### Set Up Editor for Git Commit Messages

To set up your editor to edit commit messages in Git, use the following command:
```sh
git config --global core.editor "code --wait"
```


