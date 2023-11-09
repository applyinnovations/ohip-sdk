# GuaranteePolicyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelPenalty** | Pointer to [**GuaranteePolicyTypeCancelPenalty**](GuaranteePolicyTypeCancelPenalty.md) |  | [optional] 
**DefaultGuarantee** | Pointer to **bool** | If true indicates this can be the default guarantee type to be selected for a reservation. | [optional] 
**DepositPolicy** | Pointer to [**GuaranteePolicyTypeDepositPolicy**](GuaranteePolicyTypeDepositPolicy.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the Guarantee Code. | [optional] 
**GuaranteeCode** | Pointer to **string** | Code assigned to the Guarantee. | [optional] 
**LateArrival** | Pointer to **string** | Represents the late arrival time. | [optional] 
**OnHold** | Pointer to **bool** | If true indicates this Guarantee Code is used only to hold the inventory during reservation process. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PaymentTypes** | Pointer to [**PaymentTypesType**](PaymentTypesType.md) |  | [optional] 
**PolicyRequirements** | Pointer to [**GuaranteeRequirementsType**](GuaranteeRequirementsType.md) |  | [optional] 
**ReserveInventory** | Pointer to **bool** | If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code. | [optional] 
**ShortDescription** | Pointer to [**TranslationTextType80**](TranslationTextType80.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewGuaranteePolicyType

`func NewGuaranteePolicyType() *GuaranteePolicyType`

NewGuaranteePolicyType instantiates a new GuaranteePolicyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteePolicyTypeWithDefaults

`func NewGuaranteePolicyTypeWithDefaults() *GuaranteePolicyType`

NewGuaranteePolicyTypeWithDefaults instantiates a new GuaranteePolicyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelPenalty

`func (o *GuaranteePolicyType) GetCancelPenalty() GuaranteePolicyTypeCancelPenalty`

GetCancelPenalty returns the CancelPenalty field if non-nil, zero value otherwise.

### GetCancelPenaltyOk

`func (o *GuaranteePolicyType) GetCancelPenaltyOk() (*GuaranteePolicyTypeCancelPenalty, bool)`

GetCancelPenaltyOk returns a tuple with the CancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalty

`func (o *GuaranteePolicyType) SetCancelPenalty(v GuaranteePolicyTypeCancelPenalty)`

SetCancelPenalty sets CancelPenalty field to given value.

### HasCancelPenalty

`func (o *GuaranteePolicyType) HasCancelPenalty() bool`

HasCancelPenalty returns a boolean if a field has been set.

### GetDefaultGuarantee

`func (o *GuaranteePolicyType) GetDefaultGuarantee() bool`

GetDefaultGuarantee returns the DefaultGuarantee field if non-nil, zero value otherwise.

### GetDefaultGuaranteeOk

`func (o *GuaranteePolicyType) GetDefaultGuaranteeOk() (*bool, bool)`

GetDefaultGuaranteeOk returns a tuple with the DefaultGuarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultGuarantee

`func (o *GuaranteePolicyType) SetDefaultGuarantee(v bool)`

SetDefaultGuarantee sets DefaultGuarantee field to given value.

### HasDefaultGuarantee

`func (o *GuaranteePolicyType) HasDefaultGuarantee() bool`

HasDefaultGuarantee returns a boolean if a field has been set.

### GetDepositPolicy

`func (o *GuaranteePolicyType) GetDepositPolicy() GuaranteePolicyTypeDepositPolicy`

GetDepositPolicy returns the DepositPolicy field if non-nil, zero value otherwise.

### GetDepositPolicyOk

`func (o *GuaranteePolicyType) GetDepositPolicyOk() (*GuaranteePolicyTypeDepositPolicy, bool)`

GetDepositPolicyOk returns a tuple with the DepositPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicy

`func (o *GuaranteePolicyType) SetDepositPolicy(v GuaranteePolicyTypeDepositPolicy)`

SetDepositPolicy sets DepositPolicy field to given value.

### HasDepositPolicy

`func (o *GuaranteePolicyType) HasDepositPolicy() bool`

HasDepositPolicy returns a boolean if a field has been set.

### GetDescription

`func (o *GuaranteePolicyType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GuaranteePolicyType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GuaranteePolicyType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GuaranteePolicyType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *GuaranteePolicyType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *GuaranteePolicyType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *GuaranteePolicyType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *GuaranteePolicyType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetLateArrival

`func (o *GuaranteePolicyType) GetLateArrival() string`

GetLateArrival returns the LateArrival field if non-nil, zero value otherwise.

### GetLateArrivalOk

`func (o *GuaranteePolicyType) GetLateArrivalOk() (*string, bool)`

GetLateArrivalOk returns a tuple with the LateArrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLateArrival

`func (o *GuaranteePolicyType) SetLateArrival(v string)`

SetLateArrival sets LateArrival field to given value.

### HasLateArrival

`func (o *GuaranteePolicyType) HasLateArrival() bool`

HasLateArrival returns a boolean if a field has been set.

### GetOnHold

`func (o *GuaranteePolicyType) GetOnHold() bool`

GetOnHold returns the OnHold field if non-nil, zero value otherwise.

### GetOnHoldOk

`func (o *GuaranteePolicyType) GetOnHoldOk() (*bool, bool)`

GetOnHoldOk returns a tuple with the OnHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnHold

`func (o *GuaranteePolicyType) SetOnHold(v bool)`

SetOnHold sets OnHold field to given value.

### HasOnHold

`func (o *GuaranteePolicyType) HasOnHold() bool`

HasOnHold returns a boolean if a field has been set.

### GetOrderSequence

`func (o *GuaranteePolicyType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *GuaranteePolicyType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *GuaranteePolicyType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *GuaranteePolicyType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPaymentTypes

`func (o *GuaranteePolicyType) GetPaymentTypes() PaymentTypesType`

GetPaymentTypes returns the PaymentTypes field if non-nil, zero value otherwise.

### GetPaymentTypesOk

`func (o *GuaranteePolicyType) GetPaymentTypesOk() (*PaymentTypesType, bool)`

GetPaymentTypesOk returns a tuple with the PaymentTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTypes

`func (o *GuaranteePolicyType) SetPaymentTypes(v PaymentTypesType)`

SetPaymentTypes sets PaymentTypes field to given value.

### HasPaymentTypes

`func (o *GuaranteePolicyType) HasPaymentTypes() bool`

HasPaymentTypes returns a boolean if a field has been set.

### GetPolicyRequirements

`func (o *GuaranteePolicyType) GetPolicyRequirements() GuaranteeRequirementsType`

GetPolicyRequirements returns the PolicyRequirements field if non-nil, zero value otherwise.

### GetPolicyRequirementsOk

`func (o *GuaranteePolicyType) GetPolicyRequirementsOk() (*GuaranteeRequirementsType, bool)`

GetPolicyRequirementsOk returns a tuple with the PolicyRequirements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyRequirements

`func (o *GuaranteePolicyType) SetPolicyRequirements(v GuaranteeRequirementsType)`

SetPolicyRequirements sets PolicyRequirements field to given value.

### HasPolicyRequirements

`func (o *GuaranteePolicyType) HasPolicyRequirements() bool`

HasPolicyRequirements returns a boolean if a field has been set.

### GetReserveInventory

`func (o *GuaranteePolicyType) GetReserveInventory() bool`

GetReserveInventory returns the ReserveInventory field if non-nil, zero value otherwise.

### GetReserveInventoryOk

`func (o *GuaranteePolicyType) GetReserveInventoryOk() (*bool, bool)`

GetReserveInventoryOk returns a tuple with the ReserveInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReserveInventory

`func (o *GuaranteePolicyType) SetReserveInventory(v bool)`

SetReserveInventory sets ReserveInventory field to given value.

### HasReserveInventory

`func (o *GuaranteePolicyType) HasReserveInventory() bool`

HasReserveInventory returns a boolean if a field has been set.

### GetShortDescription

`func (o *GuaranteePolicyType) GetShortDescription() TranslationTextType80`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *GuaranteePolicyType) GetShortDescriptionOk() (*TranslationTextType80, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *GuaranteePolicyType) SetShortDescription(v TranslationTextType80)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *GuaranteePolicyType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetWarnings

`func (o *GuaranteePolicyType) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuaranteePolicyType) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuaranteePolicyType) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuaranteePolicyType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


