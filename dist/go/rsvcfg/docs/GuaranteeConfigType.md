# GuaranteeConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Guarantee Code. | [optional] 
**GuaranteeCode** | Pointer to **string** | Code assigned to the Guarantee. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the reservation type is inactive or not. | [optional] 
**LateArrival** | Pointer to **string** | Represents the late arrival time. | [optional] 
**MassCancellation** | Pointer to [**GuaranteeConfigTypeMassCancellation**](GuaranteeConfigTypeMassCancellation.md) |  | [optional] 
**OnHold** | Pointer to **bool** | If true indicates this Guarantee Code is used only to hold the inventory during reservation process. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PaymentTypes** | Pointer to **[]string** | Payment card code like AX,VI etc. | [optional] 
**Requirements** | Pointer to [**GuaranteeRequirementsType**](GuaranteeRequirementsType.md) |  | [optional] 
**ReserveInventory** | Pointer to **bool** | If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code. | [optional] 
**ShortDescription** | Pointer to [**TranslationTextType80**](TranslationTextType80.md) |  | [optional] 

## Methods

### NewGuaranteeConfigType

`func NewGuaranteeConfigType() *GuaranteeConfigType`

NewGuaranteeConfigType instantiates a new GuaranteeConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteeConfigTypeWithDefaults

`func NewGuaranteeConfigTypeWithDefaults() *GuaranteeConfigType`

NewGuaranteeConfigTypeWithDefaults instantiates a new GuaranteeConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *GuaranteeConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GuaranteeConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GuaranteeConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GuaranteeConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *GuaranteeConfigType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *GuaranteeConfigType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *GuaranteeConfigType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *GuaranteeConfigType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetInactive

`func (o *GuaranteeConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *GuaranteeConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *GuaranteeConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *GuaranteeConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetLateArrival

`func (o *GuaranteeConfigType) GetLateArrival() string`

GetLateArrival returns the LateArrival field if non-nil, zero value otherwise.

### GetLateArrivalOk

`func (o *GuaranteeConfigType) GetLateArrivalOk() (*string, bool)`

GetLateArrivalOk returns a tuple with the LateArrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLateArrival

`func (o *GuaranteeConfigType) SetLateArrival(v string)`

SetLateArrival sets LateArrival field to given value.

### HasLateArrival

`func (o *GuaranteeConfigType) HasLateArrival() bool`

HasLateArrival returns a boolean if a field has been set.

### GetMassCancellation

`func (o *GuaranteeConfigType) GetMassCancellation() GuaranteeConfigTypeMassCancellation`

GetMassCancellation returns the MassCancellation field if non-nil, zero value otherwise.

### GetMassCancellationOk

`func (o *GuaranteeConfigType) GetMassCancellationOk() (*GuaranteeConfigTypeMassCancellation, bool)`

GetMassCancellationOk returns a tuple with the MassCancellation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMassCancellation

`func (o *GuaranteeConfigType) SetMassCancellation(v GuaranteeConfigTypeMassCancellation)`

SetMassCancellation sets MassCancellation field to given value.

### HasMassCancellation

`func (o *GuaranteeConfigType) HasMassCancellation() bool`

HasMassCancellation returns a boolean if a field has been set.

### GetOnHold

`func (o *GuaranteeConfigType) GetOnHold() bool`

GetOnHold returns the OnHold field if non-nil, zero value otherwise.

### GetOnHoldOk

`func (o *GuaranteeConfigType) GetOnHoldOk() (*bool, bool)`

GetOnHoldOk returns a tuple with the OnHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnHold

`func (o *GuaranteeConfigType) SetOnHold(v bool)`

SetOnHold sets OnHold field to given value.

### HasOnHold

`func (o *GuaranteeConfigType) HasOnHold() bool`

HasOnHold returns a boolean if a field has been set.

### GetOrderSequence

`func (o *GuaranteeConfigType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *GuaranteeConfigType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *GuaranteeConfigType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *GuaranteeConfigType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPaymentTypes

`func (o *GuaranteeConfigType) GetPaymentTypes() []string`

GetPaymentTypes returns the PaymentTypes field if non-nil, zero value otherwise.

### GetPaymentTypesOk

`func (o *GuaranteeConfigType) GetPaymentTypesOk() (*[]string, bool)`

GetPaymentTypesOk returns a tuple with the PaymentTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTypes

`func (o *GuaranteeConfigType) SetPaymentTypes(v []string)`

SetPaymentTypes sets PaymentTypes field to given value.

### HasPaymentTypes

`func (o *GuaranteeConfigType) HasPaymentTypes() bool`

HasPaymentTypes returns a boolean if a field has been set.

### GetRequirements

`func (o *GuaranteeConfigType) GetRequirements() GuaranteeRequirementsType`

GetRequirements returns the Requirements field if non-nil, zero value otherwise.

### GetRequirementsOk

`func (o *GuaranteeConfigType) GetRequirementsOk() (*GuaranteeRequirementsType, bool)`

GetRequirementsOk returns a tuple with the Requirements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequirements

`func (o *GuaranteeConfigType) SetRequirements(v GuaranteeRequirementsType)`

SetRequirements sets Requirements field to given value.

### HasRequirements

`func (o *GuaranteeConfigType) HasRequirements() bool`

HasRequirements returns a boolean if a field has been set.

### GetReserveInventory

`func (o *GuaranteeConfigType) GetReserveInventory() bool`

GetReserveInventory returns the ReserveInventory field if non-nil, zero value otherwise.

### GetReserveInventoryOk

`func (o *GuaranteeConfigType) GetReserveInventoryOk() (*bool, bool)`

GetReserveInventoryOk returns a tuple with the ReserveInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveInventory

`func (o *GuaranteeConfigType) SetReserveInventory(v bool)`

SetReserveInventory sets ReserveInventory field to given value.

### HasReserveInventory

`func (o *GuaranteeConfigType) HasReserveInventory() bool`

HasReserveInventory returns a boolean if a field has been set.

### GetShortDescription

`func (o *GuaranteeConfigType) GetShortDescription() TranslationTextType80`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *GuaranteeConfigType) GetShortDescriptionOk() (*TranslationTextType80, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *GuaranteeConfigType) SetShortDescription(v TranslationTextType80)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *GuaranteeConfigType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


