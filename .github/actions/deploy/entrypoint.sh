#!/bin/sh

if [[ ! -d "~/.ssh" ]]; then
  mkdir ~/.ssh
fi

    # echo "$VAULT_PASS" > ~/pass.txt
    echo "$SSH_PKEY" > ~/.ssh/id_ed25519
    # ansible-vault decrypt --vault-password-file=~/pass.txt ~/.ssh/id_ed25519
    chmod 600 ~/.ssh/id_ed25519
    eval $(ssh-agent -s)
    ssh-add ~/.ssh/id_ed25519
    ssh-keyscan -H kvadra.xyz >> ~/.ssh/known_hosts

ansible-playbook -i /opt/ansible/inventory.yml /opt/ansible/playbook.yml --user ansible
