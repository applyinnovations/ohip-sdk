# RoutingInfoTypeFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestInfo** | Pointer to [**RoutingInfoTypeFolioGuestInfo**](RoutingInfoTypeFolioGuestInfo.md) |  | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**ARNumber** | Pointer to **string** | Accounts Receivable. | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**PaymentMethod** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutingInfoTypeFolio

`func NewRoutingInfoTypeFolio() *RoutingInfoTypeFolio`

NewRoutingInfoTypeFolio instantiates a new RoutingInfoTypeFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInfoTypeFolioWithDefaults

`func NewRoutingInfoTypeFolioWithDefaults() *RoutingInfoTypeFolio`

NewRoutingInfoTypeFolioWithDefaults instantiates a new RoutingInfoTypeFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestInfo

`func (o *RoutingInfoTypeFolio) GetGuestInfo() RoutingInfoTypeFolioGuestInfo`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *RoutingInfoTypeFolio) GetGuestInfoOk() (*RoutingInfoTypeFolioGuestInfo, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *RoutingInfoTypeFolio) SetGuestInfo(v RoutingInfoTypeFolioGuestInfo)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *RoutingInfoTypeFolio) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *RoutingInfoTypeFolio) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *RoutingInfoTypeFolio) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *RoutingInfoTypeFolio) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *RoutingInfoTypeFolio) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetARNumber

`func (o *RoutingInfoTypeFolio) GetARNumber() string`

GetARNumber returns the ARNumber field if non-nil, zero value otherwise.

### GetARNumberOk

`func (o *RoutingInfoTypeFolio) GetARNumberOk() (*string, bool)`

GetARNumberOk returns a tuple with the ARNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARNumber

`func (o *RoutingInfoTypeFolio) SetARNumber(v string)`

SetARNumber sets ARNumber field to given value.

### HasARNumber

`func (o *RoutingInfoTypeFolio) HasARNumber() bool`

HasARNumber returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInfoTypeFolio) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInfoTypeFolio) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInfoTypeFolio) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInfoTypeFolio) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *RoutingInfoTypeFolio) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *RoutingInfoTypeFolio) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *RoutingInfoTypeFolio) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *RoutingInfoTypeFolio) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *RoutingInfoTypeFolio) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *RoutingInfoTypeFolio) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *RoutingInfoTypeFolio) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *RoutingInfoTypeFolio) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


