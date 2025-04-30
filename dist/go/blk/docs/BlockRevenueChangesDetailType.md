# BlockRevenueChangesDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeDate** | Pointer to **string** | Change date. | [optional] 
**StayDate** | Pointer to **string** | Date of stay. | [optional] 
**Nights** | Pointer to **int32** | Number of nights room is occupied. | [optional] 
**RoomRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomStatus** | Pointer to **string** | Unique Code to identify room status. | [optional] 
**BlockOwner** | Pointer to [**[]BlockOwnersType**](BlockOwnersType.md) | Unique Code to identify the owner. | [optional] 
**UserDetails** | Pointer to [**LogUserInfoType**](LogUserInfoType.md) |  | [optional] 

## Methods

### NewBlockRevenueChangesDetailType

`func NewBlockRevenueChangesDetailType() *BlockRevenueChangesDetailType`

NewBlockRevenueChangesDetailType instantiates a new BlockRevenueChangesDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRevenueChangesDetailTypeWithDefaults

`func NewBlockRevenueChangesDetailTypeWithDefaults() *BlockRevenueChangesDetailType`

NewBlockRevenueChangesDetailTypeWithDefaults instantiates a new BlockRevenueChangesDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChangeDate

`func (o *BlockRevenueChangesDetailType) GetChangeDate() string`

GetChangeDate returns the ChangeDate field if non-nil, zero value otherwise.

### GetChangeDateOk

`func (o *BlockRevenueChangesDetailType) GetChangeDateOk() (*string, bool)`

GetChangeDateOk returns a tuple with the ChangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeDate

`func (o *BlockRevenueChangesDetailType) SetChangeDate(v string)`

SetChangeDate sets ChangeDate field to given value.

### HasChangeDate

`func (o *BlockRevenueChangesDetailType) HasChangeDate() bool`

HasChangeDate returns a boolean if a field has been set.

### GetStayDate

`func (o *BlockRevenueChangesDetailType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *BlockRevenueChangesDetailType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *BlockRevenueChangesDetailType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *BlockRevenueChangesDetailType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.

### GetNights

`func (o *BlockRevenueChangesDetailType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *BlockRevenueChangesDetailType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *BlockRevenueChangesDetailType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *BlockRevenueChangesDetailType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetRoomRevenue

`func (o *BlockRevenueChangesDetailType) GetRoomRevenue() CurrencyAmountType`

GetRoomRevenue returns the RoomRevenue field if non-nil, zero value otherwise.

### GetRoomRevenueOk

`func (o *BlockRevenueChangesDetailType) GetRoomRevenueOk() (*CurrencyAmountType, bool)`

GetRoomRevenueOk returns a tuple with the RoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRevenue

`func (o *BlockRevenueChangesDetailType) SetRoomRevenue(v CurrencyAmountType)`

SetRoomRevenue sets RoomRevenue field to given value.

### HasRoomRevenue

`func (o *BlockRevenueChangesDetailType) HasRoomRevenue() bool`

HasRoomRevenue returns a boolean if a field has been set.

### GetRoomStatus

`func (o *BlockRevenueChangesDetailType) GetRoomStatus() string`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *BlockRevenueChangesDetailType) GetRoomStatusOk() (*string, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *BlockRevenueChangesDetailType) SetRoomStatus(v string)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *BlockRevenueChangesDetailType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetBlockOwner

`func (o *BlockRevenueChangesDetailType) GetBlockOwner() []BlockOwnersType`

GetBlockOwner returns the BlockOwner field if non-nil, zero value otherwise.

### GetBlockOwnerOk

`func (o *BlockRevenueChangesDetailType) GetBlockOwnerOk() (*[]BlockOwnersType, bool)`

GetBlockOwnerOk returns a tuple with the BlockOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockOwner

`func (o *BlockRevenueChangesDetailType) SetBlockOwner(v []BlockOwnersType)`

SetBlockOwner sets BlockOwner field to given value.

### HasBlockOwner

`func (o *BlockRevenueChangesDetailType) HasBlockOwner() bool`

HasBlockOwner returns a boolean if a field has been set.

### GetUserDetails

`func (o *BlockRevenueChangesDetailType) GetUserDetails() LogUserInfoType`

GetUserDetails returns the UserDetails field if non-nil, zero value otherwise.

### GetUserDetailsOk

`func (o *BlockRevenueChangesDetailType) GetUserDetailsOk() (*LogUserInfoType, bool)`

GetUserDetailsOk returns a tuple with the UserDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDetails

`func (o *BlockRevenueChangesDetailType) SetUserDetails(v LogUserInfoType)`

SetUserDetails sets UserDetails field to given value.

### HasUserDetails

`func (o *BlockRevenueChangesDetailType) HasUserDetails() bool`

HasUserDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


