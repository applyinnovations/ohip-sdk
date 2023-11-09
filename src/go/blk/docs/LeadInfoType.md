# LeadInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**BlockIdList**](BlockIdList.md) |  | [optional] 
**BlockName** | Pointer to **string** | Lead description. | [optional] 
**BlockStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**BlockType** | Pointer to [**BlockClassificationType**](BlockClassificationType.md) |  | [optional] 
**CateringStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Id. | [optional] 
**RoomNightsBlocked** | Pointer to **int32** | Number of blocked rooms for the lead. | [optional] 
**RoomNightsPickedup** | Pointer to **int32** | Number of reserved rooms for the lead. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewLeadInfoType

`func NewLeadInfoType() *LeadInfoType`

NewLeadInfoType instantiates a new LeadInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLeadInfoTypeWithDefaults

`func NewLeadInfoTypeWithDefaults() *LeadInfoType`

NewLeadInfoTypeWithDefaults instantiates a new LeadInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *LeadInfoType) GetBlockIdList() BlockIdList`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *LeadInfoType) GetBlockIdListOk() (*BlockIdList, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *LeadInfoType) SetBlockIdList(v BlockIdList)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *LeadInfoType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockName

`func (o *LeadInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *LeadInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *LeadInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *LeadInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockStatus

`func (o *LeadInfoType) GetBlockStatus() BookingStatusType`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *LeadInfoType) GetBlockStatusOk() (*BookingStatusType, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *LeadInfoType) SetBlockStatus(v BookingStatusType)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *LeadInfoType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetBlockType

`func (o *LeadInfoType) GetBlockType() BlockClassificationType`

GetBlockType returns the BlockType field if non-nil, zero value otherwise.

### GetBlockTypeOk

`func (o *LeadInfoType) GetBlockTypeOk() (*BlockClassificationType, bool)`

GetBlockTypeOk returns a tuple with the BlockType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockType

`func (o *LeadInfoType) SetBlockType(v BlockClassificationType)`

SetBlockType sets BlockType field to given value.

### HasBlockType

`func (o *LeadInfoType) HasBlockType() bool`

HasBlockType returns a boolean if a field has been set.

### GetCateringStatus

`func (o *LeadInfoType) GetCateringStatus() BookingStatusType`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *LeadInfoType) GetCateringStatusOk() (*BookingStatusType, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *LeadInfoType) SetCateringStatus(v BookingStatusType)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *LeadInfoType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetHotelId

`func (o *LeadInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *LeadInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *LeadInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *LeadInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomNightsBlocked

`func (o *LeadInfoType) GetRoomNightsBlocked() int32`

GetRoomNightsBlocked returns the RoomNightsBlocked field if non-nil, zero value otherwise.

### GetRoomNightsBlockedOk

`func (o *LeadInfoType) GetRoomNightsBlockedOk() (*int32, bool)`

GetRoomNightsBlockedOk returns a tuple with the RoomNightsBlocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNightsBlocked

`func (o *LeadInfoType) SetRoomNightsBlocked(v int32)`

SetRoomNightsBlocked sets RoomNightsBlocked field to given value.

### HasRoomNightsBlocked

`func (o *LeadInfoType) HasRoomNightsBlocked() bool`

HasRoomNightsBlocked returns a boolean if a field has been set.

### GetRoomNightsPickedup

`func (o *LeadInfoType) GetRoomNightsPickedup() int32`

GetRoomNightsPickedup returns the RoomNightsPickedup field if non-nil, zero value otherwise.

### GetRoomNightsPickedupOk

`func (o *LeadInfoType) GetRoomNightsPickedupOk() (*int32, bool)`

GetRoomNightsPickedupOk returns a tuple with the RoomNightsPickedup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNightsPickedup

`func (o *LeadInfoType) SetRoomNightsPickedup(v int32)`

SetRoomNightsPickedup sets RoomNightsPickedup field to given value.

### HasRoomNightsPickedup

`func (o *LeadInfoType) HasRoomNightsPickedup() bool`

HasRoomNightsPickedup returns a boolean if a field has been set.

### GetTimeSpan

`func (o *LeadInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *LeadInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *LeadInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *LeadInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


