# BlockStatusChangesDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeDate** | Pointer to **string** | Change date for this block . | [optional] 
**CurrentStatus** | Pointer to **string** | Current Status for this block . | [optional] 
**PriorStatus** | Pointer to **string** | Prior Status for this block . | [optional] 
**Revenue** | Pointer to [**RevenueSummaryType**](RevenueSummaryType.md) |  | [optional] 
**Rooms** | Pointer to [**RoomStatisticsType**](RoomStatisticsType.md) |  | [optional] 
**UserDetails** | Pointer to [**LogUserInfoType**](LogUserInfoType.md) |  | [optional] 

## Methods

### NewBlockStatusChangesDetailType

`func NewBlockStatusChangesDetailType() *BlockStatusChangesDetailType`

NewBlockStatusChangesDetailType instantiates a new BlockStatusChangesDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatusChangesDetailTypeWithDefaults

`func NewBlockStatusChangesDetailTypeWithDefaults() *BlockStatusChangesDetailType`

NewBlockStatusChangesDetailTypeWithDefaults instantiates a new BlockStatusChangesDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChangeDate

`func (o *BlockStatusChangesDetailType) GetChangeDate() string`

GetChangeDate returns the ChangeDate field if non-nil, zero value otherwise.

### GetChangeDateOk

`func (o *BlockStatusChangesDetailType) GetChangeDateOk() (*string, bool)`

GetChangeDateOk returns a tuple with the ChangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeDate

`func (o *BlockStatusChangesDetailType) SetChangeDate(v string)`

SetChangeDate sets ChangeDate field to given value.

### HasChangeDate

`func (o *BlockStatusChangesDetailType) HasChangeDate() bool`

HasChangeDate returns a boolean if a field has been set.

### GetCurrentStatus

`func (o *BlockStatusChangesDetailType) GetCurrentStatus() string`

GetCurrentStatus returns the CurrentStatus field if non-nil, zero value otherwise.

### GetCurrentStatusOk

`func (o *BlockStatusChangesDetailType) GetCurrentStatusOk() (*string, bool)`

GetCurrentStatusOk returns a tuple with the CurrentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStatus

`func (o *BlockStatusChangesDetailType) SetCurrentStatus(v string)`

SetCurrentStatus sets CurrentStatus field to given value.

### HasCurrentStatus

`func (o *BlockStatusChangesDetailType) HasCurrentStatus() bool`

HasCurrentStatus returns a boolean if a field has been set.

### GetPriorStatus

`func (o *BlockStatusChangesDetailType) GetPriorStatus() string`

GetPriorStatus returns the PriorStatus field if non-nil, zero value otherwise.

### GetPriorStatusOk

`func (o *BlockStatusChangesDetailType) GetPriorStatusOk() (*string, bool)`

GetPriorStatusOk returns a tuple with the PriorStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriorStatus

`func (o *BlockStatusChangesDetailType) SetPriorStatus(v string)`

SetPriorStatus sets PriorStatus field to given value.

### HasPriorStatus

`func (o *BlockStatusChangesDetailType) HasPriorStatus() bool`

HasPriorStatus returns a boolean if a field has been set.

### GetRevenue

`func (o *BlockStatusChangesDetailType) GetRevenue() RevenueSummaryType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *BlockStatusChangesDetailType) GetRevenueOk() (*RevenueSummaryType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *BlockStatusChangesDetailType) SetRevenue(v RevenueSummaryType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *BlockStatusChangesDetailType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetRooms

`func (o *BlockStatusChangesDetailType) GetRooms() RoomStatisticsType`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *BlockStatusChangesDetailType) GetRoomsOk() (*RoomStatisticsType, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *BlockStatusChangesDetailType) SetRooms(v RoomStatisticsType)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *BlockStatusChangesDetailType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetUserDetails

`func (o *BlockStatusChangesDetailType) GetUserDetails() LogUserInfoType`

GetUserDetails returns the UserDetails field if non-nil, zero value otherwise.

### GetUserDetailsOk

`func (o *BlockStatusChangesDetailType) GetUserDetailsOk() (*LogUserInfoType, bool)`

GetUserDetailsOk returns a tuple with the UserDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDetails

`func (o *BlockStatusChangesDetailType) SetUserDetails(v LogUserInfoType)`

SetUserDetails sets UserDetails field to given value.

### HasUserDetails

`func (o *BlockStatusChangesDetailType) HasUserDetails() bool`

HasUserDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


