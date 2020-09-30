<div class="input-group col-12">
    <?php if (isset($this->generalOption->formElement->options['inputGroup']['prefix'])) : ?>
        <div class="input-group-addon">
            <?= $this->generalOption->formElement->options['inputGroup']['prefix']; ?>
        </div>
    <?php endif; ?>
    <textarea
        class="form-control" 
        name="generalSettings[<?= $this->generalOption->name; ?>]" 
        id="<?= $this->generalOption->name; ?>" 
    ></textarea>
    <?php if (isset($this->generalOption->formElement->options['inputGroup']['suffix'])) : ?>
        <div class="input-group-addon">
            <?= $this->generalOption->formElement->options['inputGroup']['suffix']; ?>
        </div>
    <?php endif; ?>
</div>
