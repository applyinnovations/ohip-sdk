# BlockType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**BlockDetails** | Pointer to [**BlockDetailsType**](BlockDetailsType.md) |  | [optional] 
**BlockOwners** | Pointer to [**BlockOwnersType**](BlockOwnersType.md) |  | [optional] 
**Catering** | Pointer to [**CateringType**](CateringType.md) |  | [optional] 
**BlockProfiles** | Pointer to [**BlockTypeBlockProfiles**](BlockTypeBlockProfiles.md) |  | [optional] 
**InventoryItems** | Pointer to [**[]BlockInventoryItemType**](BlockInventoryItemType.md) | Inventory item attached to a block. | [optional] 
**BlockStatistics** | Pointer to [**BlockStatisticsType**](BlockStatisticsType.md) |  | [optional] 
**Comments** | Pointer to [**BlockTypeComments**](BlockTypeComments.md) |  | [optional] 
**BlockIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**Traces** | Pointer to [**[]BlockTraceType**](BlockTraceType.md) | List of Block traces. | [optional] 
**Statistics** | Pointer to [**[]BlockStatisticsSummaryType**](BlockStatisticsSummaryType.md) | Statistics summary information including Rooms Sold, Room Revenue, Food and Beverage Revenue, Average Room Rate,etc. | [optional] 
**BlockSecurity** | Pointer to [**BlockTypeBlockSecurity**](BlockTypeBlockSecurity.md) |  | [optional] 
**SellMessages** | Pointer to [**SellMessageConfigsType**](SellMessageConfigsType.md) |  | [optional] 
**Attachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**WashSchedules** | Pointer to [**[]BlockWashScheduleType**](BlockWashScheduleType.md) | Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type. | [optional] 
**Restrictions** | Pointer to [**BlockRestrictionsType**](BlockRestrictionsType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this block as recently accessed. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 

## Methods

### NewBlockType

`func NewBlockType() *BlockType`

NewBlockType instantiates a new BlockType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockTypeWithDefaults

`func NewBlockTypeWithDefaults() *BlockType`

NewBlockTypeWithDefaults instantiates a new BlockType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *BlockType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlockType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlockType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlockType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *BlockType) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *BlockType) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *BlockType) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *BlockType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetBlockDetails

`func (o *BlockType) GetBlockDetails() BlockDetailsType`

GetBlockDetails returns the BlockDetails field if non-nil, zero value otherwise.

### GetBlockDetailsOk

`func (o *BlockType) GetBlockDetailsOk() (*BlockDetailsType, bool)`

GetBlockDetailsOk returns a tuple with the BlockDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDetails

`func (o *BlockType) SetBlockDetails(v BlockDetailsType)`

SetBlockDetails sets BlockDetails field to given value.

### HasBlockDetails

`func (o *BlockType) HasBlockDetails() bool`

HasBlockDetails returns a boolean if a field has been set.

### GetBlockOwners

`func (o *BlockType) GetBlockOwners() BlockOwnersType`

GetBlockOwners returns the BlockOwners field if non-nil, zero value otherwise.

### GetBlockOwnersOk

`func (o *BlockType) GetBlockOwnersOk() (*BlockOwnersType, bool)`

GetBlockOwnersOk returns a tuple with the BlockOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockOwners

`func (o *BlockType) SetBlockOwners(v BlockOwnersType)`

SetBlockOwners sets BlockOwners field to given value.

### HasBlockOwners

`func (o *BlockType) HasBlockOwners() bool`

HasBlockOwners returns a boolean if a field has been set.

### GetCatering

`func (o *BlockType) GetCatering() CateringType`

GetCatering returns the Catering field if non-nil, zero value otherwise.

### GetCateringOk

`func (o *BlockType) GetCateringOk() (*CateringType, bool)`

GetCateringOk returns a tuple with the Catering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatering

`func (o *BlockType) SetCatering(v CateringType)`

SetCatering sets Catering field to given value.

### HasCatering

`func (o *BlockType) HasCatering() bool`

HasCatering returns a boolean if a field has been set.

### GetBlockProfiles

`func (o *BlockType) GetBlockProfiles() BlockTypeBlockProfiles`

GetBlockProfiles returns the BlockProfiles field if non-nil, zero value otherwise.

### GetBlockProfilesOk

`func (o *BlockType) GetBlockProfilesOk() (*BlockTypeBlockProfiles, bool)`

GetBlockProfilesOk returns a tuple with the BlockProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockProfiles

`func (o *BlockType) SetBlockProfiles(v BlockTypeBlockProfiles)`

SetBlockProfiles sets BlockProfiles field to given value.

### HasBlockProfiles

`func (o *BlockType) HasBlockProfiles() bool`

HasBlockProfiles returns a boolean if a field has been set.

### GetInventoryItems

`func (o *BlockType) GetInventoryItems() []BlockInventoryItemType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *BlockType) GetInventoryItemsOk() (*[]BlockInventoryItemType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *BlockType) SetInventoryItems(v []BlockInventoryItemType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *BlockType) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetBlockStatistics

`func (o *BlockType) GetBlockStatistics() BlockStatisticsType`

GetBlockStatistics returns the BlockStatistics field if non-nil, zero value otherwise.

### GetBlockStatisticsOk

`func (o *BlockType) GetBlockStatisticsOk() (*BlockStatisticsType, bool)`

GetBlockStatisticsOk returns a tuple with the BlockStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatistics

`func (o *BlockType) SetBlockStatistics(v BlockStatisticsType)`

SetBlockStatistics sets BlockStatistics field to given value.

### HasBlockStatistics

`func (o *BlockType) HasBlockStatistics() bool`

HasBlockStatistics returns a boolean if a field has been set.

### GetComments

`func (o *BlockType) GetComments() BlockTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *BlockType) GetCommentsOk() (*BlockTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *BlockType) SetComments(v BlockTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *BlockType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetBlockIndicators

`func (o *BlockType) GetBlockIndicators() []IndicatorType`

GetBlockIndicators returns the BlockIndicators field if non-nil, zero value otherwise.

### GetBlockIndicatorsOk

`func (o *BlockType) GetBlockIndicatorsOk() (*[]IndicatorType, bool)`

GetBlockIndicatorsOk returns a tuple with the BlockIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIndicators

`func (o *BlockType) SetBlockIndicators(v []IndicatorType)`

SetBlockIndicators sets BlockIndicators field to given value.

### HasBlockIndicators

`func (o *BlockType) HasBlockIndicators() bool`

HasBlockIndicators returns a boolean if a field has been set.

### GetTraces

`func (o *BlockType) GetTraces() []BlockTraceType`

GetTraces returns the Traces field if non-nil, zero value otherwise.

### GetTracesOk

`func (o *BlockType) GetTracesOk() (*[]BlockTraceType, bool)`

GetTracesOk returns a tuple with the Traces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraces

`func (o *BlockType) SetTraces(v []BlockTraceType)`

SetTraces sets Traces field to given value.

### HasTraces

`func (o *BlockType) HasTraces() bool`

HasTraces returns a boolean if a field has been set.

### GetStatistics

`func (o *BlockType) GetStatistics() []BlockStatisticsSummaryType`

GetStatistics returns the Statistics field if non-nil, zero value otherwise.

### GetStatisticsOk

`func (o *BlockType) GetStatisticsOk() (*[]BlockStatisticsSummaryType, bool)`

GetStatisticsOk returns a tuple with the Statistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatistics

`func (o *BlockType) SetStatistics(v []BlockStatisticsSummaryType)`

SetStatistics sets Statistics field to given value.

### HasStatistics

`func (o *BlockType) HasStatistics() bool`

HasStatistics returns a boolean if a field has been set.

### GetBlockSecurity

`func (o *BlockType) GetBlockSecurity() BlockTypeBlockSecurity`

GetBlockSecurity returns the BlockSecurity field if non-nil, zero value otherwise.

### GetBlockSecurityOk

`func (o *BlockType) GetBlockSecurityOk() (*BlockTypeBlockSecurity, bool)`

GetBlockSecurityOk returns a tuple with the BlockSecurity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSecurity

`func (o *BlockType) SetBlockSecurity(v BlockTypeBlockSecurity)`

SetBlockSecurity sets BlockSecurity field to given value.

### HasBlockSecurity

`func (o *BlockType) HasBlockSecurity() bool`

HasBlockSecurity returns a boolean if a field has been set.

### GetSellMessages

`func (o *BlockType) GetSellMessages() SellMessageConfigsType`

GetSellMessages returns the SellMessages field if non-nil, zero value otherwise.

### GetSellMessagesOk

`func (o *BlockType) GetSellMessagesOk() (*SellMessageConfigsType, bool)`

GetSellMessagesOk returns a tuple with the SellMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessages

`func (o *BlockType) SetSellMessages(v SellMessageConfigsType)`

SetSellMessages sets SellMessages field to given value.

### HasSellMessages

`func (o *BlockType) HasSellMessages() bool`

HasSellMessages returns a boolean if a field has been set.

### GetAttachments

`func (o *BlockType) GetAttachments() []AttachmentType`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *BlockType) GetAttachmentsOk() (*[]AttachmentType, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *BlockType) SetAttachments(v []AttachmentType)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *BlockType) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetWashSchedules

`func (o *BlockType) GetWashSchedules() []BlockWashScheduleType`

GetWashSchedules returns the WashSchedules field if non-nil, zero value otherwise.

### GetWashSchedulesOk

`func (o *BlockType) GetWashSchedulesOk() (*[]BlockWashScheduleType, bool)`

GetWashSchedulesOk returns a tuple with the WashSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashSchedules

`func (o *BlockType) SetWashSchedules(v []BlockWashScheduleType)`

SetWashSchedules sets WashSchedules field to given value.

### HasWashSchedules

`func (o *BlockType) HasWashSchedules() bool`

HasWashSchedules returns a boolean if a field has been set.

### GetRestrictions

`func (o *BlockType) GetRestrictions() BlockRestrictionsType`

GetRestrictions returns the Restrictions field if non-nil, zero value otherwise.

### GetRestrictionsOk

`func (o *BlockType) GetRestrictionsOk() (*BlockRestrictionsType, bool)`

GetRestrictionsOk returns a tuple with the Restrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictions

`func (o *BlockType) SetRestrictions(v BlockRestrictionsType)`

SetRestrictions sets Restrictions field to given value.

### HasRestrictions

`func (o *BlockType) HasRestrictions() bool`

HasRestrictions returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *BlockType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *BlockType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *BlockType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *BlockType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *BlockType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *BlockType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *BlockType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *BlockType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *BlockType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *BlockType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *BlockType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *BlockType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *BlockType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *BlockType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *BlockType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *BlockType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *BlockType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *BlockType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *BlockType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *BlockType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


