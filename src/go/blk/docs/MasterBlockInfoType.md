# MasterBlockInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**BlockIdList**](BlockIdList.md) |  | [optional] 
**BlockName** | Pointer to **string** | Block description. | [optional] 
**BlockStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**BlockType** | Pointer to [**BlockClassificationType**](BlockClassificationType.md) |  | [optional] 
**CateringStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Master/Sub Block&#39;s Hotel Code. | [optional] 
**MasterSubHotels** | Pointer to [**[]HotelCodeListType**](HotelCodeListType.md) | Pertains valid hotel code list for logged in user against Master/Sub header record. | [optional] 
**RoomNights** | Pointer to **int32** | Pertain value for blocked rooms for a block. | [optional] 
**RoomNightsPickedup** | Pointer to **int32** | Pertain value for reserved rooms for a block. | [optional] 
**SubBlockInfo** | Pointer to [**[]MasterSubBlockBaseInfoType**](MasterSubBlockBaseInfoType.md) | Basic information pertaining to the sub block. | [optional] 
**SyncBlockDates** | Pointer to **bool** | Indicates to check if Block Dates to be in sync. | [optional] 
**SyncBlockStatusDetails** | Pointer to **bool** | Indicates if Block Status Details to be in sync. | [optional] 
**SyncOtherBlockDetails** | Pointer to **bool** | Indicates whether other BlockDetails to be in Sync. | [optional] 
**SyncPackages** | Pointer to **bool** | Indicates if packages to be in Sync. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewMasterBlockInfoType

`func NewMasterBlockInfoType() *MasterBlockInfoType`

NewMasterBlockInfoType instantiates a new MasterBlockInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMasterBlockInfoTypeWithDefaults

`func NewMasterBlockInfoTypeWithDefaults() *MasterBlockInfoType`

NewMasterBlockInfoTypeWithDefaults instantiates a new MasterBlockInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *MasterBlockInfoType) GetBlockIdList() BlockIdList`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *MasterBlockInfoType) GetBlockIdListOk() (*BlockIdList, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *MasterBlockInfoType) SetBlockIdList(v BlockIdList)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *MasterBlockInfoType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockName

`func (o *MasterBlockInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *MasterBlockInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *MasterBlockInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *MasterBlockInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockStatus

`func (o *MasterBlockInfoType) GetBlockStatus() BookingStatusType`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *MasterBlockInfoType) GetBlockStatusOk() (*BookingStatusType, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *MasterBlockInfoType) SetBlockStatus(v BookingStatusType)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *MasterBlockInfoType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetBlockType

`func (o *MasterBlockInfoType) GetBlockType() BlockClassificationType`

GetBlockType returns the BlockType field if non-nil, zero value otherwise.

### GetBlockTypeOk

`func (o *MasterBlockInfoType) GetBlockTypeOk() (*BlockClassificationType, bool)`

GetBlockTypeOk returns a tuple with the BlockType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockType

`func (o *MasterBlockInfoType) SetBlockType(v BlockClassificationType)`

SetBlockType sets BlockType field to given value.

### HasBlockType

`func (o *MasterBlockInfoType) HasBlockType() bool`

HasBlockType returns a boolean if a field has been set.

### GetCateringStatus

`func (o *MasterBlockInfoType) GetCateringStatus() BookingStatusType`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *MasterBlockInfoType) GetCateringStatusOk() (*BookingStatusType, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *MasterBlockInfoType) SetCateringStatus(v BookingStatusType)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *MasterBlockInfoType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetHotelId

`func (o *MasterBlockInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MasterBlockInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MasterBlockInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MasterBlockInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMasterSubHotels

`func (o *MasterBlockInfoType) GetMasterSubHotels() []HotelCodeListType`

GetMasterSubHotels returns the MasterSubHotels field if non-nil, zero value otherwise.

### GetMasterSubHotelsOk

`func (o *MasterBlockInfoType) GetMasterSubHotelsOk() (*[]HotelCodeListType, bool)`

GetMasterSubHotelsOk returns a tuple with the MasterSubHotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterSubHotels

`func (o *MasterBlockInfoType) SetMasterSubHotels(v []HotelCodeListType)`

SetMasterSubHotels sets MasterSubHotels field to given value.

### HasMasterSubHotels

`func (o *MasterBlockInfoType) HasMasterSubHotels() bool`

HasMasterSubHotels returns a boolean if a field has been set.

### GetRoomNights

`func (o *MasterBlockInfoType) GetRoomNights() int32`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *MasterBlockInfoType) GetRoomNightsOk() (*int32, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *MasterBlockInfoType) SetRoomNights(v int32)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *MasterBlockInfoType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.

### GetRoomNightsPickedup

`func (o *MasterBlockInfoType) GetRoomNightsPickedup() int32`

GetRoomNightsPickedup returns the RoomNightsPickedup field if non-nil, zero value otherwise.

### GetRoomNightsPickedupOk

`func (o *MasterBlockInfoType) GetRoomNightsPickedupOk() (*int32, bool)`

GetRoomNightsPickedupOk returns a tuple with the RoomNightsPickedup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNightsPickedup

`func (o *MasterBlockInfoType) SetRoomNightsPickedup(v int32)`

SetRoomNightsPickedup sets RoomNightsPickedup field to given value.

### HasRoomNightsPickedup

`func (o *MasterBlockInfoType) HasRoomNightsPickedup() bool`

HasRoomNightsPickedup returns a boolean if a field has been set.

### GetSubBlockInfo

`func (o *MasterBlockInfoType) GetSubBlockInfo() []MasterSubBlockBaseInfoType`

GetSubBlockInfo returns the SubBlockInfo field if non-nil, zero value otherwise.

### GetSubBlockInfoOk

`func (o *MasterBlockInfoType) GetSubBlockInfoOk() (*[]MasterSubBlockBaseInfoType, bool)`

GetSubBlockInfoOk returns a tuple with the SubBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubBlockInfo

`func (o *MasterBlockInfoType) SetSubBlockInfo(v []MasterSubBlockBaseInfoType)`

SetSubBlockInfo sets SubBlockInfo field to given value.

### HasSubBlockInfo

`func (o *MasterBlockInfoType) HasSubBlockInfo() bool`

HasSubBlockInfo returns a boolean if a field has been set.

### GetSyncBlockDates

`func (o *MasterBlockInfoType) GetSyncBlockDates() bool`

GetSyncBlockDates returns the SyncBlockDates field if non-nil, zero value otherwise.

### GetSyncBlockDatesOk

`func (o *MasterBlockInfoType) GetSyncBlockDatesOk() (*bool, bool)`

GetSyncBlockDatesOk returns a tuple with the SyncBlockDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncBlockDates

`func (o *MasterBlockInfoType) SetSyncBlockDates(v bool)`

SetSyncBlockDates sets SyncBlockDates field to given value.

### HasSyncBlockDates

`func (o *MasterBlockInfoType) HasSyncBlockDates() bool`

HasSyncBlockDates returns a boolean if a field has been set.

### GetSyncBlockStatusDetails

`func (o *MasterBlockInfoType) GetSyncBlockStatusDetails() bool`

GetSyncBlockStatusDetails returns the SyncBlockStatusDetails field if non-nil, zero value otherwise.

### GetSyncBlockStatusDetailsOk

`func (o *MasterBlockInfoType) GetSyncBlockStatusDetailsOk() (*bool, bool)`

GetSyncBlockStatusDetailsOk returns a tuple with the SyncBlockStatusDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncBlockStatusDetails

`func (o *MasterBlockInfoType) SetSyncBlockStatusDetails(v bool)`

SetSyncBlockStatusDetails sets SyncBlockStatusDetails field to given value.

### HasSyncBlockStatusDetails

`func (o *MasterBlockInfoType) HasSyncBlockStatusDetails() bool`

HasSyncBlockStatusDetails returns a boolean if a field has been set.

### GetSyncOtherBlockDetails

`func (o *MasterBlockInfoType) GetSyncOtherBlockDetails() bool`

GetSyncOtherBlockDetails returns the SyncOtherBlockDetails field if non-nil, zero value otherwise.

### GetSyncOtherBlockDetailsOk

`func (o *MasterBlockInfoType) GetSyncOtherBlockDetailsOk() (*bool, bool)`

GetSyncOtherBlockDetailsOk returns a tuple with the SyncOtherBlockDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncOtherBlockDetails

`func (o *MasterBlockInfoType) SetSyncOtherBlockDetails(v bool)`

SetSyncOtherBlockDetails sets SyncOtherBlockDetails field to given value.

### HasSyncOtherBlockDetails

`func (o *MasterBlockInfoType) HasSyncOtherBlockDetails() bool`

HasSyncOtherBlockDetails returns a boolean if a field has been set.

### GetSyncPackages

`func (o *MasterBlockInfoType) GetSyncPackages() bool`

GetSyncPackages returns the SyncPackages field if non-nil, zero value otherwise.

### GetSyncPackagesOk

`func (o *MasterBlockInfoType) GetSyncPackagesOk() (*bool, bool)`

GetSyncPackagesOk returns a tuple with the SyncPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncPackages

`func (o *MasterBlockInfoType) SetSyncPackages(v bool)`

SetSyncPackages sets SyncPackages field to given value.

### HasSyncPackages

`func (o *MasterBlockInfoType) HasSyncPackages() bool`

HasSyncPackages returns a boolean if a field has been set.

### GetTimeSpan

`func (o *MasterBlockInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *MasterBlockInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *MasterBlockInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *MasterBlockInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


