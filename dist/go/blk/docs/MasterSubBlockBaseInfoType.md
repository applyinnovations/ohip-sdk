# MasterSubBlockBaseInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**HotelId** | Pointer to **string** | Master/Sub Block&#39;s Hotel Code. | [optional] 
**BlockType** | Pointer to [**BlockClassificationType**](BlockClassificationType.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**BlockName** | Pointer to **string** | Block description. | [optional] 
**BlockStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**CateringStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**RoomNights** | Pointer to **int32** | Pertain value for blocked rooms for a block. | [optional] 
**RoomNightsPickedup** | Pointer to **int32** | Pertain value for reserved rooms for a block. | [optional] 
**SyncBlockDates** | Pointer to **bool** | Indicates to check if Block Dates to be in sync. | [optional] 
**SyncOtherBlockDetails** | Pointer to **bool** | Indicates whether other BlockDetails to be in Sync. | [optional] 
**SyncBlockStatusDetails** | Pointer to **bool** | Indicates if Block Status Details to be in sync. | [optional] 
**SyncPackages** | Pointer to **bool** | Indicates if packages to be in Sync. | [optional] 

## Methods

### NewMasterSubBlockBaseInfoType

`func NewMasterSubBlockBaseInfoType() *MasterSubBlockBaseInfoType`

NewMasterSubBlockBaseInfoType instantiates a new MasterSubBlockBaseInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMasterSubBlockBaseInfoTypeWithDefaults

`func NewMasterSubBlockBaseInfoTypeWithDefaults() *MasterSubBlockBaseInfoType`

NewMasterSubBlockBaseInfoTypeWithDefaults instantiates a new MasterSubBlockBaseInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *MasterSubBlockBaseInfoType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *MasterSubBlockBaseInfoType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *MasterSubBlockBaseInfoType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *MasterSubBlockBaseInfoType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetHotelId

`func (o *MasterSubBlockBaseInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MasterSubBlockBaseInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MasterSubBlockBaseInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MasterSubBlockBaseInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockType

`func (o *MasterSubBlockBaseInfoType) GetBlockType() BlockClassificationType`

GetBlockType returns the BlockType field if non-nil, zero value otherwise.

### GetBlockTypeOk

`func (o *MasterSubBlockBaseInfoType) GetBlockTypeOk() (*BlockClassificationType, bool)`

GetBlockTypeOk returns a tuple with the BlockType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockType

`func (o *MasterSubBlockBaseInfoType) SetBlockType(v BlockClassificationType)`

SetBlockType sets BlockType field to given value.

### HasBlockType

`func (o *MasterSubBlockBaseInfoType) HasBlockType() bool`

HasBlockType returns a boolean if a field has been set.

### GetTimeSpan

`func (o *MasterSubBlockBaseInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *MasterSubBlockBaseInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *MasterSubBlockBaseInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *MasterSubBlockBaseInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetBlockName

`func (o *MasterSubBlockBaseInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *MasterSubBlockBaseInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *MasterSubBlockBaseInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *MasterSubBlockBaseInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockStatus

`func (o *MasterSubBlockBaseInfoType) GetBlockStatus() BookingStatusType`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *MasterSubBlockBaseInfoType) GetBlockStatusOk() (*BookingStatusType, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *MasterSubBlockBaseInfoType) SetBlockStatus(v BookingStatusType)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *MasterSubBlockBaseInfoType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetCateringStatus

`func (o *MasterSubBlockBaseInfoType) GetCateringStatus() BookingStatusType`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *MasterSubBlockBaseInfoType) GetCateringStatusOk() (*BookingStatusType, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *MasterSubBlockBaseInfoType) SetCateringStatus(v BookingStatusType)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *MasterSubBlockBaseInfoType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetRoomNights

`func (o *MasterSubBlockBaseInfoType) GetRoomNights() int32`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *MasterSubBlockBaseInfoType) GetRoomNightsOk() (*int32, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *MasterSubBlockBaseInfoType) SetRoomNights(v int32)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *MasterSubBlockBaseInfoType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.

### GetRoomNightsPickedup

`func (o *MasterSubBlockBaseInfoType) GetRoomNightsPickedup() int32`

GetRoomNightsPickedup returns the RoomNightsPickedup field if non-nil, zero value otherwise.

### GetRoomNightsPickedupOk

`func (o *MasterSubBlockBaseInfoType) GetRoomNightsPickedupOk() (*int32, bool)`

GetRoomNightsPickedupOk returns a tuple with the RoomNightsPickedup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNightsPickedup

`func (o *MasterSubBlockBaseInfoType) SetRoomNightsPickedup(v int32)`

SetRoomNightsPickedup sets RoomNightsPickedup field to given value.

### HasRoomNightsPickedup

`func (o *MasterSubBlockBaseInfoType) HasRoomNightsPickedup() bool`

HasRoomNightsPickedup returns a boolean if a field has been set.

### GetSyncBlockDates

`func (o *MasterSubBlockBaseInfoType) GetSyncBlockDates() bool`

GetSyncBlockDates returns the SyncBlockDates field if non-nil, zero value otherwise.

### GetSyncBlockDatesOk

`func (o *MasterSubBlockBaseInfoType) GetSyncBlockDatesOk() (*bool, bool)`

GetSyncBlockDatesOk returns a tuple with the SyncBlockDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncBlockDates

`func (o *MasterSubBlockBaseInfoType) SetSyncBlockDates(v bool)`

SetSyncBlockDates sets SyncBlockDates field to given value.

### HasSyncBlockDates

`func (o *MasterSubBlockBaseInfoType) HasSyncBlockDates() bool`

HasSyncBlockDates returns a boolean if a field has been set.

### GetSyncOtherBlockDetails

`func (o *MasterSubBlockBaseInfoType) GetSyncOtherBlockDetails() bool`

GetSyncOtherBlockDetails returns the SyncOtherBlockDetails field if non-nil, zero value otherwise.

### GetSyncOtherBlockDetailsOk

`func (o *MasterSubBlockBaseInfoType) GetSyncOtherBlockDetailsOk() (*bool, bool)`

GetSyncOtherBlockDetailsOk returns a tuple with the SyncOtherBlockDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncOtherBlockDetails

`func (o *MasterSubBlockBaseInfoType) SetSyncOtherBlockDetails(v bool)`

SetSyncOtherBlockDetails sets SyncOtherBlockDetails field to given value.

### HasSyncOtherBlockDetails

`func (o *MasterSubBlockBaseInfoType) HasSyncOtherBlockDetails() bool`

HasSyncOtherBlockDetails returns a boolean if a field has been set.

### GetSyncBlockStatusDetails

`func (o *MasterSubBlockBaseInfoType) GetSyncBlockStatusDetails() bool`

GetSyncBlockStatusDetails returns the SyncBlockStatusDetails field if non-nil, zero value otherwise.

### GetSyncBlockStatusDetailsOk

`func (o *MasterSubBlockBaseInfoType) GetSyncBlockStatusDetailsOk() (*bool, bool)`

GetSyncBlockStatusDetailsOk returns a tuple with the SyncBlockStatusDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncBlockStatusDetails

`func (o *MasterSubBlockBaseInfoType) SetSyncBlockStatusDetails(v bool)`

SetSyncBlockStatusDetails sets SyncBlockStatusDetails field to given value.

### HasSyncBlockStatusDetails

`func (o *MasterSubBlockBaseInfoType) HasSyncBlockStatusDetails() bool`

HasSyncBlockStatusDetails returns a boolean if a field has been set.

### GetSyncPackages

`func (o *MasterSubBlockBaseInfoType) GetSyncPackages() bool`

GetSyncPackages returns the SyncPackages field if non-nil, zero value otherwise.

### GetSyncPackagesOk

`func (o *MasterSubBlockBaseInfoType) GetSyncPackagesOk() (*bool, bool)`

GetSyncPackagesOk returns a tuple with the SyncPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncPackages

`func (o *MasterSubBlockBaseInfoType) SetSyncPackages(v bool)`

SetSyncPackages sets SyncPackages field to given value.

### HasSyncPackages

`func (o *MasterSubBlockBaseInfoType) HasSyncPackages() bool`

HasSyncPackages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


