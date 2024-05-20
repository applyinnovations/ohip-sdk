# RoutingInstructionsInfoCriteriaFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARNumber** | Pointer to **string** | Accounts Receivable. | [optional] 
**GuestInfo** | Pointer to [**ResvRoutingCriteriaTypeFolioGuestInfo**](ResvRoutingCriteriaTypeFolioGuestInfo.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**PaymentMethod** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutingInstructionsInfoCriteriaFolio

`func NewRoutingInstructionsInfoCriteriaFolio() *RoutingInstructionsInfoCriteriaFolio`

NewRoutingInstructionsInfoCriteriaFolio instantiates a new RoutingInstructionsInfoCriteriaFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsInfoCriteriaFolioWithDefaults

`func NewRoutingInstructionsInfoCriteriaFolioWithDefaults() *RoutingInstructionsInfoCriteriaFolio`

NewRoutingInstructionsInfoCriteriaFolioWithDefaults instantiates a new RoutingInstructionsInfoCriteriaFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARNumber

`func (o *RoutingInstructionsInfoCriteriaFolio) GetARNumber() string`

GetARNumber returns the ARNumber field if non-nil, zero value otherwise.

### GetARNumberOk

`func (o *RoutingInstructionsInfoCriteriaFolio) GetARNumberOk() (*string, bool)`

GetARNumberOk returns a tuple with the ARNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARNumber

`func (o *RoutingInstructionsInfoCriteriaFolio) SetARNumber(v string)`

SetARNumber sets ARNumber field to given value.

### HasARNumber

`func (o *RoutingInstructionsInfoCriteriaFolio) HasARNumber() bool`

HasARNumber returns a boolean if a field has been set.

### GetGuestInfo

`func (o *RoutingInstructionsInfoCriteriaFolio) GetGuestInfo() ResvRoutingCriteriaTypeFolioGuestInfo`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *RoutingInstructionsInfoCriteriaFolio) GetGuestInfoOk() (*ResvRoutingCriteriaTypeFolioGuestInfo, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *RoutingInstructionsInfoCriteriaFolio) SetGuestInfo(v ResvRoutingCriteriaTypeFolioGuestInfo)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *RoutingInstructionsInfoCriteriaFolio) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsInfoCriteriaFolio) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsInfoCriteriaFolio) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsInfoCriteriaFolio) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsInfoCriteriaFolio) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *RoutingInstructionsInfoCriteriaFolio) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *RoutingInstructionsInfoCriteriaFolio) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *RoutingInstructionsInfoCriteriaFolio) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *RoutingInstructionsInfoCriteriaFolio) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *RoutingInstructionsInfoCriteriaFolio) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *RoutingInstructionsInfoCriteriaFolio) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *RoutingInstructionsInfoCriteriaFolio) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *RoutingInstructionsInfoCriteriaFolio) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


