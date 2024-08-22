# HotelTransactionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentCode** | Pointer to **string** | Transaction code to be used to make adjustments on the posting made using this transaction code. | [optional] 
**AllowServiceRecovery** | Pointer to **bool** | Flag to identify if this transaction code already used as service recovery adjustment code. | [optional] 
**Amounts** | Pointer to [**TrxCodeAmountsType**](TrxCodeAmountsType.md) |  | [optional] 
**AssociatedTransactionCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Code and description of the standard transaction code associated to this comp transaction code. | [optional] 
**Classification** | Pointer to [**TrxCodeClassificationType**](TrxCodeClassificationType.md) |  | [optional] 
**Code** | Pointer to **string** | Unique Transaction Code. | [optional] 
**CompTransaction** | Pointer to **bool** | If true indicates this transaction codes is for Comp Accounting. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**GLMapping** | Pointer to [**GLMappingType**](GLMappingType.md) |  | [optional] 
**GeneratesSetup** | Pointer to [**GeneratesSetupType**](GeneratesSetupType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel&#39;s Transaction Code configuration detail. | [optional] 
**MappingCodes** | Pointer to [**[]ExportMappingLinkedCodeType**](ExportMappingLinkedCodeType.md) | Mapping code and value attached to Transaction Code. | [optional] 
**PaymentSetup** | Pointer to [**PaymentTrxSetupType**](PaymentTrxSetupType.md) |  | [optional] 
**PrintTrxReceipt** | Pointer to **bool** |  | [optional] 
**ServiceRecoveryAdjustmentCode** | Pointer to **string** | Transaction code to be used to make service recovery adjustments on the posting made using this transaction code. | [optional] 
**TransactionAdjustments** | Pointer to [**[]TransactionAdjustmentType**](TransactionAdjustmentType.md) | Combination of Adjustment Reason Code and Transaction Adjustment Code. | [optional] 
**TrxSetup** | Pointer to [**TrxSetupType**](TrxSetupType.md) |  | [optional] 
**UniversalProductCode** | Pointer to **string** | Unique Universal product code of the article. | [optional] 

## Methods

### NewHotelTransactionCodeType

`func NewHotelTransactionCodeType() *HotelTransactionCodeType`

NewHotelTransactionCodeType instantiates a new HotelTransactionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransactionCodeTypeWithDefaults

`func NewHotelTransactionCodeTypeWithDefaults() *HotelTransactionCodeType`

NewHotelTransactionCodeTypeWithDefaults instantiates a new HotelTransactionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentCode

`func (o *HotelTransactionCodeType) GetAdjustmentCode() string`

GetAdjustmentCode returns the AdjustmentCode field if non-nil, zero value otherwise.

### GetAdjustmentCodeOk

`func (o *HotelTransactionCodeType) GetAdjustmentCodeOk() (*string, bool)`

GetAdjustmentCodeOk returns a tuple with the AdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCode

`func (o *HotelTransactionCodeType) SetAdjustmentCode(v string)`

SetAdjustmentCode sets AdjustmentCode field to given value.

### HasAdjustmentCode

`func (o *HotelTransactionCodeType) HasAdjustmentCode() bool`

HasAdjustmentCode returns a boolean if a field has been set.

### GetAllowServiceRecovery

`func (o *HotelTransactionCodeType) GetAllowServiceRecovery() bool`

GetAllowServiceRecovery returns the AllowServiceRecovery field if non-nil, zero value otherwise.

### GetAllowServiceRecoveryOk

`func (o *HotelTransactionCodeType) GetAllowServiceRecoveryOk() (*bool, bool)`

GetAllowServiceRecoveryOk returns a tuple with the AllowServiceRecovery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowServiceRecovery

`func (o *HotelTransactionCodeType) SetAllowServiceRecovery(v bool)`

SetAllowServiceRecovery sets AllowServiceRecovery field to given value.

### HasAllowServiceRecovery

`func (o *HotelTransactionCodeType) HasAllowServiceRecovery() bool`

HasAllowServiceRecovery returns a boolean if a field has been set.

### GetAmounts

`func (o *HotelTransactionCodeType) GetAmounts() TrxCodeAmountsType`

GetAmounts returns the Amounts field if non-nil, zero value otherwise.

### GetAmountsOk

`func (o *HotelTransactionCodeType) GetAmountsOk() (*TrxCodeAmountsType, bool)`

GetAmountsOk returns a tuple with the Amounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmounts

`func (o *HotelTransactionCodeType) SetAmounts(v TrxCodeAmountsType)`

SetAmounts sets Amounts field to given value.

### HasAmounts

`func (o *HotelTransactionCodeType) HasAmounts() bool`

HasAmounts returns a boolean if a field has been set.

### GetAssociatedTransactionCodes

`func (o *HotelTransactionCodeType) GetAssociatedTransactionCodes() []CodeDescriptionType`

GetAssociatedTransactionCodes returns the AssociatedTransactionCodes field if non-nil, zero value otherwise.

### GetAssociatedTransactionCodesOk

`func (o *HotelTransactionCodeType) GetAssociatedTransactionCodesOk() (*[]CodeDescriptionType, bool)`

GetAssociatedTransactionCodesOk returns a tuple with the AssociatedTransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedTransactionCodes

`func (o *HotelTransactionCodeType) SetAssociatedTransactionCodes(v []CodeDescriptionType)`

SetAssociatedTransactionCodes sets AssociatedTransactionCodes field to given value.

### HasAssociatedTransactionCodes

`func (o *HotelTransactionCodeType) HasAssociatedTransactionCodes() bool`

HasAssociatedTransactionCodes returns a boolean if a field has been set.

### GetClassification

`func (o *HotelTransactionCodeType) GetClassification() TrxCodeClassificationType`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *HotelTransactionCodeType) GetClassificationOk() (*TrxCodeClassificationType, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *HotelTransactionCodeType) SetClassification(v TrxCodeClassificationType)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *HotelTransactionCodeType) HasClassification() bool`

HasClassification returns a boolean if a field has been set.

### GetCode

`func (o *HotelTransactionCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HotelTransactionCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HotelTransactionCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HotelTransactionCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCompTransaction

`func (o *HotelTransactionCodeType) GetCompTransaction() bool`

GetCompTransaction returns the CompTransaction field if non-nil, zero value otherwise.

### GetCompTransactionOk

`func (o *HotelTransactionCodeType) GetCompTransactionOk() (*bool, bool)`

GetCompTransactionOk returns a tuple with the CompTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompTransaction

`func (o *HotelTransactionCodeType) SetCompTransaction(v bool)`

SetCompTransaction sets CompTransaction field to given value.

### HasCompTransaction

`func (o *HotelTransactionCodeType) HasCompTransaction() bool`

HasCompTransaction returns a boolean if a field has been set.

### GetDescription

`func (o *HotelTransactionCodeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelTransactionCodeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelTransactionCodeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelTransactionCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGLMapping

`func (o *HotelTransactionCodeType) GetGLMapping() GLMappingType`

GetGLMapping returns the GLMapping field if non-nil, zero value otherwise.

### GetGLMappingOk

`func (o *HotelTransactionCodeType) GetGLMappingOk() (*GLMappingType, bool)`

GetGLMappingOk returns a tuple with the GLMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGLMapping

`func (o *HotelTransactionCodeType) SetGLMapping(v GLMappingType)`

SetGLMapping sets GLMapping field to given value.

### HasGLMapping

`func (o *HotelTransactionCodeType) HasGLMapping() bool`

HasGLMapping returns a boolean if a field has been set.

### GetGeneratesSetup

`func (o *HotelTransactionCodeType) GetGeneratesSetup() GeneratesSetupType`

GetGeneratesSetup returns the GeneratesSetup field if non-nil, zero value otherwise.

### GetGeneratesSetupOk

`func (o *HotelTransactionCodeType) GetGeneratesSetupOk() (*GeneratesSetupType, bool)`

GetGeneratesSetupOk returns a tuple with the GeneratesSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesSetup

`func (o *HotelTransactionCodeType) SetGeneratesSetup(v GeneratesSetupType)`

SetGeneratesSetup sets GeneratesSetup field to given value.

### HasGeneratesSetup

`func (o *HotelTransactionCodeType) HasGeneratesSetup() bool`

HasGeneratesSetup returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelTransactionCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelTransactionCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelTransactionCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelTransactionCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMappingCodes

`func (o *HotelTransactionCodeType) GetMappingCodes() []ExportMappingLinkedCodeType`

GetMappingCodes returns the MappingCodes field if non-nil, zero value otherwise.

### GetMappingCodesOk

`func (o *HotelTransactionCodeType) GetMappingCodesOk() (*[]ExportMappingLinkedCodeType, bool)`

GetMappingCodesOk returns a tuple with the MappingCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappingCodes

`func (o *HotelTransactionCodeType) SetMappingCodes(v []ExportMappingLinkedCodeType)`

SetMappingCodes sets MappingCodes field to given value.

### HasMappingCodes

`func (o *HotelTransactionCodeType) HasMappingCodes() bool`

HasMappingCodes returns a boolean if a field has been set.

### GetPaymentSetup

`func (o *HotelTransactionCodeType) GetPaymentSetup() PaymentTrxSetupType`

GetPaymentSetup returns the PaymentSetup field if non-nil, zero value otherwise.

### GetPaymentSetupOk

`func (o *HotelTransactionCodeType) GetPaymentSetupOk() (*PaymentTrxSetupType, bool)`

GetPaymentSetupOk returns a tuple with the PaymentSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentSetup

`func (o *HotelTransactionCodeType) SetPaymentSetup(v PaymentTrxSetupType)`

SetPaymentSetup sets PaymentSetup field to given value.

### HasPaymentSetup

`func (o *HotelTransactionCodeType) HasPaymentSetup() bool`

HasPaymentSetup returns a boolean if a field has been set.

### GetPrintTrxReceipt

`func (o *HotelTransactionCodeType) GetPrintTrxReceipt() bool`

GetPrintTrxReceipt returns the PrintTrxReceipt field if non-nil, zero value otherwise.

### GetPrintTrxReceiptOk

`func (o *HotelTransactionCodeType) GetPrintTrxReceiptOk() (*bool, bool)`

GetPrintTrxReceiptOk returns a tuple with the PrintTrxReceipt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintTrxReceipt

`func (o *HotelTransactionCodeType) SetPrintTrxReceipt(v bool)`

SetPrintTrxReceipt sets PrintTrxReceipt field to given value.

### HasPrintTrxReceipt

`func (o *HotelTransactionCodeType) HasPrintTrxReceipt() bool`

HasPrintTrxReceipt returns a boolean if a field has been set.

### GetServiceRecoveryAdjustmentCode

`func (o *HotelTransactionCodeType) GetServiceRecoveryAdjustmentCode() string`

GetServiceRecoveryAdjustmentCode returns the ServiceRecoveryAdjustmentCode field if non-nil, zero value otherwise.

### GetServiceRecoveryAdjustmentCodeOk

`func (o *HotelTransactionCodeType) GetServiceRecoveryAdjustmentCodeOk() (*string, bool)`

GetServiceRecoveryAdjustmentCodeOk returns a tuple with the ServiceRecoveryAdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRecoveryAdjustmentCode

`func (o *HotelTransactionCodeType) SetServiceRecoveryAdjustmentCode(v string)`

SetServiceRecoveryAdjustmentCode sets ServiceRecoveryAdjustmentCode field to given value.

### HasServiceRecoveryAdjustmentCode

`func (o *HotelTransactionCodeType) HasServiceRecoveryAdjustmentCode() bool`

HasServiceRecoveryAdjustmentCode returns a boolean if a field has been set.

### GetTransactionAdjustments

`func (o *HotelTransactionCodeType) GetTransactionAdjustments() []TransactionAdjustmentType`

GetTransactionAdjustments returns the TransactionAdjustments field if non-nil, zero value otherwise.

### GetTransactionAdjustmentsOk

`func (o *HotelTransactionCodeType) GetTransactionAdjustmentsOk() (*[]TransactionAdjustmentType, bool)`

GetTransactionAdjustmentsOk returns a tuple with the TransactionAdjustments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAdjustments

`func (o *HotelTransactionCodeType) SetTransactionAdjustments(v []TransactionAdjustmentType)`

SetTransactionAdjustments sets TransactionAdjustments field to given value.

### HasTransactionAdjustments

`func (o *HotelTransactionCodeType) HasTransactionAdjustments() bool`

HasTransactionAdjustments returns a boolean if a field has been set.

### GetTrxSetup

`func (o *HotelTransactionCodeType) GetTrxSetup() TrxSetupType`

GetTrxSetup returns the TrxSetup field if non-nil, zero value otherwise.

### GetTrxSetupOk

`func (o *HotelTransactionCodeType) GetTrxSetupOk() (*TrxSetupType, bool)`

GetTrxSetupOk returns a tuple with the TrxSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxSetup

`func (o *HotelTransactionCodeType) SetTrxSetup(v TrxSetupType)`

SetTrxSetup sets TrxSetup field to given value.

### HasTrxSetup

`func (o *HotelTransactionCodeType) HasTrxSetup() bool`

HasTrxSetup returns a boolean if a field has been set.

### GetUniversalProductCode

`func (o *HotelTransactionCodeType) GetUniversalProductCode() string`

GetUniversalProductCode returns the UniversalProductCode field if non-nil, zero value otherwise.

### GetUniversalProductCodeOk

`func (o *HotelTransactionCodeType) GetUniversalProductCodeOk() (*string, bool)`

GetUniversalProductCodeOk returns a tuple with the UniversalProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalProductCode

`func (o *HotelTransactionCodeType) SetUniversalProductCode(v string)`

SetUniversalProductCode sets UniversalProductCode field to given value.

### HasUniversalProductCode

`func (o *HotelTransactionCodeType) HasUniversalProductCode() bool`

HasUniversalProductCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


