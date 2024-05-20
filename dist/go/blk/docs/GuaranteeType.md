# GuaranteeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Guarantee Code. | [optional] 
**GuaranteeCode** | Pointer to **string** | Code assigned to the Guarantee. | [optional] 
**LateArrival** | Pointer to **string** | Represents the late arrival time. | [optional] 
**OnHold** | Pointer to **bool** | If true indicates this Guarantee Code is used only to hold the inventory during reservation process. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PaymentTypes** | Pointer to **[]string** | Payment card code like AX,VI etc. | [optional] 
**Requirements** | Pointer to [**GuaranteeRequirementsType**](GuaranteeRequirementsType.md) |  | [optional] 
**ReserveInventory** | Pointer to **bool** | If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code. | [optional] 
**ShortDescription** | Pointer to [**TranslationTextType80**](TranslationTextType80.md) |  | [optional] 

## Methods

### NewGuaranteeType

`func NewGuaranteeType() *GuaranteeType`

NewGuaranteeType instantiates a new GuaranteeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteeTypeWithDefaults

`func NewGuaranteeTypeWithDefaults() *GuaranteeType`

NewGuaranteeTypeWithDefaults instantiates a new GuaranteeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *GuaranteeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GuaranteeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GuaranteeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GuaranteeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *GuaranteeType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *GuaranteeType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *GuaranteeType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *GuaranteeType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetLateArrival

`func (o *GuaranteeType) GetLateArrival() string`

GetLateArrival returns the LateArrival field if non-nil, zero value otherwise.

### GetLateArrivalOk

`func (o *GuaranteeType) GetLateArrivalOk() (*string, bool)`

GetLateArrivalOk returns a tuple with the LateArrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLateArrival

`func (o *GuaranteeType) SetLateArrival(v string)`

SetLateArrival sets LateArrival field to given value.

### HasLateArrival

`func (o *GuaranteeType) HasLateArrival() bool`

HasLateArrival returns a boolean if a field has been set.

### GetOnHold

`func (o *GuaranteeType) GetOnHold() bool`

GetOnHold returns the OnHold field if non-nil, zero value otherwise.

### GetOnHoldOk

`func (o *GuaranteeType) GetOnHoldOk() (*bool, bool)`

GetOnHoldOk returns a tuple with the OnHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnHold

`func (o *GuaranteeType) SetOnHold(v bool)`

SetOnHold sets OnHold field to given value.

### HasOnHold

`func (o *GuaranteeType) HasOnHold() bool`

HasOnHold returns a boolean if a field has been set.

### GetOrderSequence

`func (o *GuaranteeType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *GuaranteeType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *GuaranteeType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *GuaranteeType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPaymentTypes

`func (o *GuaranteeType) GetPaymentTypes() []string`

GetPaymentTypes returns the PaymentTypes field if non-nil, zero value otherwise.

### GetPaymentTypesOk

`func (o *GuaranteeType) GetPaymentTypesOk() (*[]string, bool)`

GetPaymentTypesOk returns a tuple with the PaymentTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTypes

`func (o *GuaranteeType) SetPaymentTypes(v []string)`

SetPaymentTypes sets PaymentTypes field to given value.

### HasPaymentTypes

`func (o *GuaranteeType) HasPaymentTypes() bool`

HasPaymentTypes returns a boolean if a field has been set.

### GetRequirements

`func (o *GuaranteeType) GetRequirements() GuaranteeRequirementsType`

GetRequirements returns the Requirements field if non-nil, zero value otherwise.

### GetRequirementsOk

`func (o *GuaranteeType) GetRequirementsOk() (*GuaranteeRequirementsType, bool)`

GetRequirementsOk returns a tuple with the Requirements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequirements

`func (o *GuaranteeType) SetRequirements(v GuaranteeRequirementsType)`

SetRequirements sets Requirements field to given value.

### HasRequirements

`func (o *GuaranteeType) HasRequirements() bool`

HasRequirements returns a boolean if a field has been set.

### GetReserveInventory

`func (o *GuaranteeType) GetReserveInventory() bool`

GetReserveInventory returns the ReserveInventory field if non-nil, zero value otherwise.

### GetReserveInventoryOk

`func (o *GuaranteeType) GetReserveInventoryOk() (*bool, bool)`

GetReserveInventoryOk returns a tuple with the ReserveInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveInventory

`func (o *GuaranteeType) SetReserveInventory(v bool)`

SetReserveInventory sets ReserveInventory field to given value.

### HasReserveInventory

`func (o *GuaranteeType) HasReserveInventory() bool`

HasReserveInventory returns a boolean if a field has been set.

### GetShortDescription

`func (o *GuaranteeType) GetShortDescription() TranslationTextType80`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *GuaranteeType) GetShortDescriptionOk() (*TranslationTextType80, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *GuaranteeType) SetShortDescription(v TranslationTextType80)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *GuaranteeType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


