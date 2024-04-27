# ResvRoutingCriteriaTypeFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARNumber** | Pointer to **string** | Accounts Receivable. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**GuestInfo** | Pointer to [**ResvRoutingCriteriaTypeFolioGuestInfo**](ResvRoutingCriteriaTypeFolioGuestInfo.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**PaymentMethod** | Pointer to **string** |  | [optional] 

## Methods

### NewResvRoutingCriteriaTypeFolio

`func NewResvRoutingCriteriaTypeFolio() *ResvRoutingCriteriaTypeFolio`

NewResvRoutingCriteriaTypeFolio instantiates a new ResvRoutingCriteriaTypeFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvRoutingCriteriaTypeFolioWithDefaults

`func NewResvRoutingCriteriaTypeFolioWithDefaults() *ResvRoutingCriteriaTypeFolio`

NewResvRoutingCriteriaTypeFolioWithDefaults instantiates a new ResvRoutingCriteriaTypeFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARNumber

`func (o *ResvRoutingCriteriaTypeFolio) GetARNumber() string`

GetARNumber returns the ARNumber field if non-nil, zero value otherwise.

### GetARNumberOk

`func (o *ResvRoutingCriteriaTypeFolio) GetARNumberOk() (*string, bool)`

GetARNumberOk returns a tuple with the ARNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARNumber

`func (o *ResvRoutingCriteriaTypeFolio) SetARNumber(v string)`

SetARNumber sets ARNumber field to given value.

### HasARNumber

`func (o *ResvRoutingCriteriaTypeFolio) HasARNumber() bool`

HasARNumber returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *ResvRoutingCriteriaTypeFolio) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *ResvRoutingCriteriaTypeFolio) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *ResvRoutingCriteriaTypeFolio) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *ResvRoutingCriteriaTypeFolio) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetGuestInfo

`func (o *ResvRoutingCriteriaTypeFolio) GetGuestInfo() ResvRoutingCriteriaTypeFolioGuestInfo`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *ResvRoutingCriteriaTypeFolio) GetGuestInfoOk() (*ResvRoutingCriteriaTypeFolioGuestInfo, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *ResvRoutingCriteriaTypeFolio) SetGuestInfo(v ResvRoutingCriteriaTypeFolioGuestInfo)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *ResvRoutingCriteriaTypeFolio) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *ResvRoutingCriteriaTypeFolio) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *ResvRoutingCriteriaTypeFolio) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *ResvRoutingCriteriaTypeFolio) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *ResvRoutingCriteriaTypeFolio) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *ResvRoutingCriteriaTypeFolio) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *ResvRoutingCriteriaTypeFolio) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *ResvRoutingCriteriaTypeFolio) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *ResvRoutingCriteriaTypeFolio) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ResvRoutingCriteriaTypeFolio) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ResvRoutingCriteriaTypeFolio) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ResvRoutingCriteriaTypeFolio) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ResvRoutingCriteriaTypeFolio) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


