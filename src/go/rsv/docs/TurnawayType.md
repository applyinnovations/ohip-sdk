# TurnawayType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**CallId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Comments** | Pointer to **string** | Holds comments for a prospect reservation to be turned away. | [optional] 
**Details** | Pointer to [**TurnawayDetailsType**](TurnawayDetailsType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**ReasonCode** | Pointer to **string** | Holds turn away code pertaining to reason of turning away prospect reservation. | [optional] 

## Methods

### NewTurnawayType

`func NewTurnawayType() *TurnawayType`

NewTurnawayType instantiates a new TurnawayType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTurnawayTypeWithDefaults

`func NewTurnawayTypeWithDefaults() *TurnawayType`

NewTurnawayTypeWithDefaults instantiates a new TurnawayType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *TurnawayType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *TurnawayType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *TurnawayType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *TurnawayType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetCallId

`func (o *TurnawayType) GetCallId() UniqueIDType`

GetCallId returns the CallId field if non-nil, zero value otherwise.

### GetCallIdOk

`func (o *TurnawayType) GetCallIdOk() (*UniqueIDType, bool)`

GetCallIdOk returns a tuple with the CallId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallId

`func (o *TurnawayType) SetCallId(v UniqueIDType)`

SetCallId sets CallId field to given value.

### HasCallId

`func (o *TurnawayType) HasCallId() bool`

HasCallId returns a boolean if a field has been set.

### GetComments

`func (o *TurnawayType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *TurnawayType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *TurnawayType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *TurnawayType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetDetails

`func (o *TurnawayType) GetDetails() TurnawayDetailsType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *TurnawayType) GetDetailsOk() (*TurnawayDetailsType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *TurnawayType) SetDetails(v TurnawayDetailsType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *TurnawayType) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetProfileIdList

`func (o *TurnawayType) GetProfileIdList() ProfileIdList`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *TurnawayType) GetProfileIdListOk() (*ProfileIdList, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *TurnawayType) SetProfileIdList(v ProfileIdList)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *TurnawayType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetReasonCode

`func (o *TurnawayType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *TurnawayType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *TurnawayType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *TurnawayType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


