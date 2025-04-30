# BlockStatusCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**RoomStatusType** | Pointer to [**BlockStatusCodeStatusType**](BlockStatusCodeStatusType.md) |  | [optional] 
**CateringStatusType** | Pointer to [**BlockStatusCodeStatusType**](BlockStatusCodeStatusType.md) |  | [optional] 
**DefaultReservationType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ReasonType** | Pointer to **string** | Reason type for every block reservation cancellation. Block Cancellation Reason, Block Refused Reasons, and Block Lost Reasons. | [optional] 
**Color** | Pointer to [**StatusColorType**](StatusColorType.md) |  | [optional] 
**AllowPickup** | Pointer to **bool** | Indicates if the rooms with this status code will be allowed for pickup or not. | [optional] 
**ReturnToInventory** | Pointer to **bool** | Indicates if the rooms with this status code can be returned to availability or not. | [optional] 
**Starting** | Pointer to **bool** | Indicates if the status code is the starting status of the status cycle or not. | [optional] 
**LeadStatus** | Pointer to **bool** | Indicates the default status for all new leads. Only one lead status can be selected as the default. | [optional] 
**LogCatering** | Pointer to **bool** | Indicates if the status code logs the catering changes or not. | [optional] 
**ShowDiary** | Pointer to **bool** | Indicates if the function diary will be shown within the Sales and Catering. | [optional] 
**OrderBy** | Pointer to **int32** | Indicates the order the status code is displayed in the status cycle. | [optional] 
**InUse** | Pointer to **bool** | Returns true if the status code is already used in Block / Event / Status Flow. | [optional] 
**CateringInUse** | Pointer to **bool** | Returns true if the status code is already used in Events. | [optional] 
**Opportunity** | Pointer to **bool** | Indicates that the business block created with this Status is an Opportunity. | [optional] 

## Methods

### NewBlockStatusCodeType

`func NewBlockStatusCodeType() *BlockStatusCodeType`

NewBlockStatusCodeType instantiates a new BlockStatusCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatusCodeTypeWithDefaults

`func NewBlockStatusCodeTypeWithDefaults() *BlockStatusCodeType`

NewBlockStatusCodeTypeWithDefaults instantiates a new BlockStatusCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *BlockStatusCodeType) GetStatus() CodeDescriptionType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BlockStatusCodeType) GetStatusOk() (*CodeDescriptionType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BlockStatusCodeType) SetStatus(v CodeDescriptionType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BlockStatusCodeType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRoomStatusType

`func (o *BlockStatusCodeType) GetRoomStatusType() BlockStatusCodeStatusType`

GetRoomStatusType returns the RoomStatusType field if non-nil, zero value otherwise.

### GetRoomStatusTypeOk

`func (o *BlockStatusCodeType) GetRoomStatusTypeOk() (*BlockStatusCodeStatusType, bool)`

GetRoomStatusTypeOk returns a tuple with the RoomStatusType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatusType

`func (o *BlockStatusCodeType) SetRoomStatusType(v BlockStatusCodeStatusType)`

SetRoomStatusType sets RoomStatusType field to given value.

### HasRoomStatusType

`func (o *BlockStatusCodeType) HasRoomStatusType() bool`

HasRoomStatusType returns a boolean if a field has been set.

### GetCateringStatusType

`func (o *BlockStatusCodeType) GetCateringStatusType() BlockStatusCodeStatusType`

GetCateringStatusType returns the CateringStatusType field if non-nil, zero value otherwise.

### GetCateringStatusTypeOk

`func (o *BlockStatusCodeType) GetCateringStatusTypeOk() (*BlockStatusCodeStatusType, bool)`

GetCateringStatusTypeOk returns a tuple with the CateringStatusType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatusType

`func (o *BlockStatusCodeType) SetCateringStatusType(v BlockStatusCodeStatusType)`

SetCateringStatusType sets CateringStatusType field to given value.

### HasCateringStatusType

`func (o *BlockStatusCodeType) HasCateringStatusType() bool`

HasCateringStatusType returns a boolean if a field has been set.

### GetDefaultReservationType

`func (o *BlockStatusCodeType) GetDefaultReservationType() CodeDescriptionType`

GetDefaultReservationType returns the DefaultReservationType field if non-nil, zero value otherwise.

### GetDefaultReservationTypeOk

`func (o *BlockStatusCodeType) GetDefaultReservationTypeOk() (*CodeDescriptionType, bool)`

GetDefaultReservationTypeOk returns a tuple with the DefaultReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultReservationType

`func (o *BlockStatusCodeType) SetDefaultReservationType(v CodeDescriptionType)`

SetDefaultReservationType sets DefaultReservationType field to given value.

### HasDefaultReservationType

`func (o *BlockStatusCodeType) HasDefaultReservationType() bool`

HasDefaultReservationType returns a boolean if a field has been set.

### GetReasonType

`func (o *BlockStatusCodeType) GetReasonType() string`

GetReasonType returns the ReasonType field if non-nil, zero value otherwise.

### GetReasonTypeOk

`func (o *BlockStatusCodeType) GetReasonTypeOk() (*string, bool)`

GetReasonTypeOk returns a tuple with the ReasonType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonType

`func (o *BlockStatusCodeType) SetReasonType(v string)`

SetReasonType sets ReasonType field to given value.

### HasReasonType

`func (o *BlockStatusCodeType) HasReasonType() bool`

HasReasonType returns a boolean if a field has been set.

### GetColor

`func (o *BlockStatusCodeType) GetColor() StatusColorType`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *BlockStatusCodeType) GetColorOk() (*StatusColorType, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *BlockStatusCodeType) SetColor(v StatusColorType)`

SetColor sets Color field to given value.

### HasColor

`func (o *BlockStatusCodeType) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetAllowPickup

`func (o *BlockStatusCodeType) GetAllowPickup() bool`

GetAllowPickup returns the AllowPickup field if non-nil, zero value otherwise.

### GetAllowPickupOk

`func (o *BlockStatusCodeType) GetAllowPickupOk() (*bool, bool)`

GetAllowPickupOk returns a tuple with the AllowPickup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPickup

`func (o *BlockStatusCodeType) SetAllowPickup(v bool)`

SetAllowPickup sets AllowPickup field to given value.

### HasAllowPickup

`func (o *BlockStatusCodeType) HasAllowPickup() bool`

HasAllowPickup returns a boolean if a field has been set.

### GetReturnToInventory

`func (o *BlockStatusCodeType) GetReturnToInventory() bool`

GetReturnToInventory returns the ReturnToInventory field if non-nil, zero value otherwise.

### GetReturnToInventoryOk

`func (o *BlockStatusCodeType) GetReturnToInventoryOk() (*bool, bool)`

GetReturnToInventoryOk returns a tuple with the ReturnToInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnToInventory

`func (o *BlockStatusCodeType) SetReturnToInventory(v bool)`

SetReturnToInventory sets ReturnToInventory field to given value.

### HasReturnToInventory

`func (o *BlockStatusCodeType) HasReturnToInventory() bool`

HasReturnToInventory returns a boolean if a field has been set.

### GetStarting

`func (o *BlockStatusCodeType) GetStarting() bool`

GetStarting returns the Starting field if non-nil, zero value otherwise.

### GetStartingOk

`func (o *BlockStatusCodeType) GetStartingOk() (*bool, bool)`

GetStartingOk returns a tuple with the Starting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarting

`func (o *BlockStatusCodeType) SetStarting(v bool)`

SetStarting sets Starting field to given value.

### HasStarting

`func (o *BlockStatusCodeType) HasStarting() bool`

HasStarting returns a boolean if a field has been set.

### GetLeadStatus

`func (o *BlockStatusCodeType) GetLeadStatus() bool`

GetLeadStatus returns the LeadStatus field if non-nil, zero value otherwise.

### GetLeadStatusOk

`func (o *BlockStatusCodeType) GetLeadStatusOk() (*bool, bool)`

GetLeadStatusOk returns a tuple with the LeadStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeadStatus

`func (o *BlockStatusCodeType) SetLeadStatus(v bool)`

SetLeadStatus sets LeadStatus field to given value.

### HasLeadStatus

`func (o *BlockStatusCodeType) HasLeadStatus() bool`

HasLeadStatus returns a boolean if a field has been set.

### GetLogCatering

`func (o *BlockStatusCodeType) GetLogCatering() bool`

GetLogCatering returns the LogCatering field if non-nil, zero value otherwise.

### GetLogCateringOk

`func (o *BlockStatusCodeType) GetLogCateringOk() (*bool, bool)`

GetLogCateringOk returns a tuple with the LogCatering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogCatering

`func (o *BlockStatusCodeType) SetLogCatering(v bool)`

SetLogCatering sets LogCatering field to given value.

### HasLogCatering

`func (o *BlockStatusCodeType) HasLogCatering() bool`

HasLogCatering returns a boolean if a field has been set.

### GetShowDiary

`func (o *BlockStatusCodeType) GetShowDiary() bool`

GetShowDiary returns the ShowDiary field if non-nil, zero value otherwise.

### GetShowDiaryOk

`func (o *BlockStatusCodeType) GetShowDiaryOk() (*bool, bool)`

GetShowDiaryOk returns a tuple with the ShowDiary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowDiary

`func (o *BlockStatusCodeType) SetShowDiary(v bool)`

SetShowDiary sets ShowDiary field to given value.

### HasShowDiary

`func (o *BlockStatusCodeType) HasShowDiary() bool`

HasShowDiary returns a boolean if a field has been set.

### GetOrderBy

`func (o *BlockStatusCodeType) GetOrderBy() int32`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *BlockStatusCodeType) GetOrderByOk() (*int32, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *BlockStatusCodeType) SetOrderBy(v int32)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *BlockStatusCodeType) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetInUse

`func (o *BlockStatusCodeType) GetInUse() bool`

GetInUse returns the InUse field if non-nil, zero value otherwise.

### GetInUseOk

`func (o *BlockStatusCodeType) GetInUseOk() (*bool, bool)`

GetInUseOk returns a tuple with the InUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInUse

`func (o *BlockStatusCodeType) SetInUse(v bool)`

SetInUse sets InUse field to given value.

### HasInUse

`func (o *BlockStatusCodeType) HasInUse() bool`

HasInUse returns a boolean if a field has been set.

### GetCateringInUse

`func (o *BlockStatusCodeType) GetCateringInUse() bool`

GetCateringInUse returns the CateringInUse field if non-nil, zero value otherwise.

### GetCateringInUseOk

`func (o *BlockStatusCodeType) GetCateringInUseOk() (*bool, bool)`

GetCateringInUseOk returns a tuple with the CateringInUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringInUse

`func (o *BlockStatusCodeType) SetCateringInUse(v bool)`

SetCateringInUse sets CateringInUse field to given value.

### HasCateringInUse

`func (o *BlockStatusCodeType) HasCateringInUse() bool`

HasCateringInUse returns a boolean if a field has been set.

### GetOpportunity

`func (o *BlockStatusCodeType) GetOpportunity() bool`

GetOpportunity returns the Opportunity field if non-nil, zero value otherwise.

### GetOpportunityOk

`func (o *BlockStatusCodeType) GetOpportunityOk() (*bool, bool)`

GetOpportunityOk returns a tuple with the Opportunity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpportunity

`func (o *BlockStatusCodeType) SetOpportunity(v bool)`

SetOpportunity sets Opportunity field to given value.

### HasOpportunity

`func (o *BlockStatusCodeType) HasOpportunity() bool`

HasOpportunity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


