# TemplateTransactionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Classification** | Pointer to [**TrxCodeClassificationType**](TrxCodeClassificationType.md) |  | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**PaymentSetup** | Pointer to [**PaymentTrxSetupType**](PaymentTrxSetupType.md) |  | [optional] 
**TrxSetup** | Pointer to [**TrxSetupType**](TrxSetupType.md) |  | [optional] 
**AdjustmentCode** | Pointer to **string** | Transaction code to be used to make adjustments on the posting made using this transaction code. | [optional] 
**TransactionAdjustments** | Pointer to [**[]TransactionAdjustmentType**](TransactionAdjustmentType.md) | Combination of Adjustment Reason Code and Transaction Adjustment Code. | [optional] 
**ServiceRecoveryAdjustmentCode** | Pointer to **string** | Transaction code to be used to make service recovery adjustments on the posting made using this transaction code. | [optional] 
**Amounts** | Pointer to [**TrxCodeAmountsType**](TrxCodeAmountsType.md) |  | [optional] 
**GeneratesSetup** | Pointer to [**GeneratesSetupType**](GeneratesSetupType.md) |  | [optional] 
**GLMapping** | Pointer to [**GLMappingType**](GLMappingType.md) |  | [optional] 
**AssociatedTransactionCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Code and description of the standard transaction code associated to this comp transaction code. | [optional] 
**AllowServiceRecovery** | Pointer to **bool** | Flag to identify if this transaction code already used as service recovery adjustment code. | [optional] 
**UniversalProductCode** | Pointer to **string** | Unique Universal product code of the article. | [optional] 
**MappingCodes** | Pointer to [**[]ExportMappingLinkedCodeType**](ExportMappingLinkedCodeType.md) | Mapping code and value attached to Transaction Code. | [optional] 
**Code** | Pointer to **string** | Unique Transaction Code. | [optional] 
**CompTransaction** | Pointer to **bool** | If true indicates this transaction codes is for Comp Accounting. | [optional] 

## Methods

### NewTemplateTransactionCodeType

`func NewTemplateTransactionCodeType() *TemplateTransactionCodeType`

NewTemplateTransactionCodeType instantiates a new TemplateTransactionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateTransactionCodeTypeWithDefaults

`func NewTemplateTransactionCodeTypeWithDefaults() *TemplateTransactionCodeType`

NewTemplateTransactionCodeTypeWithDefaults instantiates a new TemplateTransactionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassification

`func (o *TemplateTransactionCodeType) GetClassification() TrxCodeClassificationType`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *TemplateTransactionCodeType) GetClassificationOk() (*TrxCodeClassificationType, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *TemplateTransactionCodeType) SetClassification(v TrxCodeClassificationType)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *TemplateTransactionCodeType) HasClassification() bool`

HasClassification returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateTransactionCodeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateTransactionCodeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateTransactionCodeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateTransactionCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPaymentSetup

`func (o *TemplateTransactionCodeType) GetPaymentSetup() PaymentTrxSetupType`

GetPaymentSetup returns the PaymentSetup field if non-nil, zero value otherwise.

### GetPaymentSetupOk

`func (o *TemplateTransactionCodeType) GetPaymentSetupOk() (*PaymentTrxSetupType, bool)`

GetPaymentSetupOk returns a tuple with the PaymentSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentSetup

`func (o *TemplateTransactionCodeType) SetPaymentSetup(v PaymentTrxSetupType)`

SetPaymentSetup sets PaymentSetup field to given value.

### HasPaymentSetup

`func (o *TemplateTransactionCodeType) HasPaymentSetup() bool`

HasPaymentSetup returns a boolean if a field has been set.

### GetTrxSetup

`func (o *TemplateTransactionCodeType) GetTrxSetup() TrxSetupType`

GetTrxSetup returns the TrxSetup field if non-nil, zero value otherwise.

### GetTrxSetupOk

`func (o *TemplateTransactionCodeType) GetTrxSetupOk() (*TrxSetupType, bool)`

GetTrxSetupOk returns a tuple with the TrxSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxSetup

`func (o *TemplateTransactionCodeType) SetTrxSetup(v TrxSetupType)`

SetTrxSetup sets TrxSetup field to given value.

### HasTrxSetup

`func (o *TemplateTransactionCodeType) HasTrxSetup() bool`

HasTrxSetup returns a boolean if a field has been set.

### GetAdjustmentCode

`func (o *TemplateTransactionCodeType) GetAdjustmentCode() string`

GetAdjustmentCode returns the AdjustmentCode field if non-nil, zero value otherwise.

### GetAdjustmentCodeOk

`func (o *TemplateTransactionCodeType) GetAdjustmentCodeOk() (*string, bool)`

GetAdjustmentCodeOk returns a tuple with the AdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCode

`func (o *TemplateTransactionCodeType) SetAdjustmentCode(v string)`

SetAdjustmentCode sets AdjustmentCode field to given value.

### HasAdjustmentCode

`func (o *TemplateTransactionCodeType) HasAdjustmentCode() bool`

HasAdjustmentCode returns a boolean if a field has been set.

### GetTransactionAdjustments

`func (o *TemplateTransactionCodeType) GetTransactionAdjustments() []TransactionAdjustmentType`

GetTransactionAdjustments returns the TransactionAdjustments field if non-nil, zero value otherwise.

### GetTransactionAdjustmentsOk

`func (o *TemplateTransactionCodeType) GetTransactionAdjustmentsOk() (*[]TransactionAdjustmentType, bool)`

GetTransactionAdjustmentsOk returns a tuple with the TransactionAdjustments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAdjustments

`func (o *TemplateTransactionCodeType) SetTransactionAdjustments(v []TransactionAdjustmentType)`

SetTransactionAdjustments sets TransactionAdjustments field to given value.

### HasTransactionAdjustments

`func (o *TemplateTransactionCodeType) HasTransactionAdjustments() bool`

HasTransactionAdjustments returns a boolean if a field has been set.

### GetServiceRecoveryAdjustmentCode

`func (o *TemplateTransactionCodeType) GetServiceRecoveryAdjustmentCode() string`

GetServiceRecoveryAdjustmentCode returns the ServiceRecoveryAdjustmentCode field if non-nil, zero value otherwise.

### GetServiceRecoveryAdjustmentCodeOk

`func (o *TemplateTransactionCodeType) GetServiceRecoveryAdjustmentCodeOk() (*string, bool)`

GetServiceRecoveryAdjustmentCodeOk returns a tuple with the ServiceRecoveryAdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRecoveryAdjustmentCode

`func (o *TemplateTransactionCodeType) SetServiceRecoveryAdjustmentCode(v string)`

SetServiceRecoveryAdjustmentCode sets ServiceRecoveryAdjustmentCode field to given value.

### HasServiceRecoveryAdjustmentCode

`func (o *TemplateTransactionCodeType) HasServiceRecoveryAdjustmentCode() bool`

HasServiceRecoveryAdjustmentCode returns a boolean if a field has been set.

### GetAmounts

`func (o *TemplateTransactionCodeType) GetAmounts() TrxCodeAmountsType`

GetAmounts returns the Amounts field if non-nil, zero value otherwise.

### GetAmountsOk

`func (o *TemplateTransactionCodeType) GetAmountsOk() (*TrxCodeAmountsType, bool)`

GetAmountsOk returns a tuple with the Amounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmounts

`func (o *TemplateTransactionCodeType) SetAmounts(v TrxCodeAmountsType)`

SetAmounts sets Amounts field to given value.

### HasAmounts

`func (o *TemplateTransactionCodeType) HasAmounts() bool`

HasAmounts returns a boolean if a field has been set.

### GetGeneratesSetup

`func (o *TemplateTransactionCodeType) GetGeneratesSetup() GeneratesSetupType`

GetGeneratesSetup returns the GeneratesSetup field if non-nil, zero value otherwise.

### GetGeneratesSetupOk

`func (o *TemplateTransactionCodeType) GetGeneratesSetupOk() (*GeneratesSetupType, bool)`

GetGeneratesSetupOk returns a tuple with the GeneratesSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesSetup

`func (o *TemplateTransactionCodeType) SetGeneratesSetup(v GeneratesSetupType)`

SetGeneratesSetup sets GeneratesSetup field to given value.

### HasGeneratesSetup

`func (o *TemplateTransactionCodeType) HasGeneratesSetup() bool`

HasGeneratesSetup returns a boolean if a field has been set.

### GetGLMapping

`func (o *TemplateTransactionCodeType) GetGLMapping() GLMappingType`

GetGLMapping returns the GLMapping field if non-nil, zero value otherwise.

### GetGLMappingOk

`func (o *TemplateTransactionCodeType) GetGLMappingOk() (*GLMappingType, bool)`

GetGLMappingOk returns a tuple with the GLMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGLMapping

`func (o *TemplateTransactionCodeType) SetGLMapping(v GLMappingType)`

SetGLMapping sets GLMapping field to given value.

### HasGLMapping

`func (o *TemplateTransactionCodeType) HasGLMapping() bool`

HasGLMapping returns a boolean if a field has been set.

### GetAssociatedTransactionCodes

`func (o *TemplateTransactionCodeType) GetAssociatedTransactionCodes() []CodeDescriptionType`

GetAssociatedTransactionCodes returns the AssociatedTransactionCodes field if non-nil, zero value otherwise.

### GetAssociatedTransactionCodesOk

`func (o *TemplateTransactionCodeType) GetAssociatedTransactionCodesOk() (*[]CodeDescriptionType, bool)`

GetAssociatedTransactionCodesOk returns a tuple with the AssociatedTransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedTransactionCodes

`func (o *TemplateTransactionCodeType) SetAssociatedTransactionCodes(v []CodeDescriptionType)`

SetAssociatedTransactionCodes sets AssociatedTransactionCodes field to given value.

### HasAssociatedTransactionCodes

`func (o *TemplateTransactionCodeType) HasAssociatedTransactionCodes() bool`

HasAssociatedTransactionCodes returns a boolean if a field has been set.

### GetAllowServiceRecovery

`func (o *TemplateTransactionCodeType) GetAllowServiceRecovery() bool`

GetAllowServiceRecovery returns the AllowServiceRecovery field if non-nil, zero value otherwise.

### GetAllowServiceRecoveryOk

`func (o *TemplateTransactionCodeType) GetAllowServiceRecoveryOk() (*bool, bool)`

GetAllowServiceRecoveryOk returns a tuple with the AllowServiceRecovery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowServiceRecovery

`func (o *TemplateTransactionCodeType) SetAllowServiceRecovery(v bool)`

SetAllowServiceRecovery sets AllowServiceRecovery field to given value.

### HasAllowServiceRecovery

`func (o *TemplateTransactionCodeType) HasAllowServiceRecovery() bool`

HasAllowServiceRecovery returns a boolean if a field has been set.

### GetUniversalProductCode

`func (o *TemplateTransactionCodeType) GetUniversalProductCode() string`

GetUniversalProductCode returns the UniversalProductCode field if non-nil, zero value otherwise.

### GetUniversalProductCodeOk

`func (o *TemplateTransactionCodeType) GetUniversalProductCodeOk() (*string, bool)`

GetUniversalProductCodeOk returns a tuple with the UniversalProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalProductCode

`func (o *TemplateTransactionCodeType) SetUniversalProductCode(v string)`

SetUniversalProductCode sets UniversalProductCode field to given value.

### HasUniversalProductCode

`func (o *TemplateTransactionCodeType) HasUniversalProductCode() bool`

HasUniversalProductCode returns a boolean if a field has been set.

### GetMappingCodes

`func (o *TemplateTransactionCodeType) GetMappingCodes() []ExportMappingLinkedCodeType`

GetMappingCodes returns the MappingCodes field if non-nil, zero value otherwise.

### GetMappingCodesOk

`func (o *TemplateTransactionCodeType) GetMappingCodesOk() (*[]ExportMappingLinkedCodeType, bool)`

GetMappingCodesOk returns a tuple with the MappingCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingCodes

`func (o *TemplateTransactionCodeType) SetMappingCodes(v []ExportMappingLinkedCodeType)`

SetMappingCodes sets MappingCodes field to given value.

### HasMappingCodes

`func (o *TemplateTransactionCodeType) HasMappingCodes() bool`

HasMappingCodes returns a boolean if a field has been set.

### GetCode

`func (o *TemplateTransactionCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateTransactionCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateTransactionCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateTransactionCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCompTransaction

`func (o *TemplateTransactionCodeType) GetCompTransaction() bool`

GetCompTransaction returns the CompTransaction field if non-nil, zero value otherwise.

### GetCompTransactionOk

`func (o *TemplateTransactionCodeType) GetCompTransactionOk() (*bool, bool)`

GetCompTransactionOk returns a tuple with the CompTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompTransaction

`func (o *TemplateTransactionCodeType) SetCompTransaction(v bool)`

SetCompTransaction sets CompTransaction field to given value.

### HasCompTransaction

`func (o *TemplateTransactionCodeType) HasCompTransaction() bool`

HasCompTransaction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


