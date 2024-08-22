# BlockInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessExclusions** | Pointer to [**BlockAccessExclusionsType**](BlockAccessExclusionsType.md) |  | [optional] 
**AlternateDates** | Pointer to [**[]BlockAlternateDateType**](BlockAlternateDateType.md) | Alternate Date information for the Block. | [optional] 
**Attachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**BlockDetails** | Pointer to [**BlockDetailsType**](BlockDetailsType.md) |  | [optional] 
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**BlockIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**BlockOwners** | Pointer to [**BlockOwnersType**](BlockOwnersType.md) |  | [optional] 
**BlockPackages** | Pointer to [**[]BlockPackageType**](BlockPackageType.md) | A Block Package represents a non-room product provided to guests. Block Pacakges may have associated inventory and charges. | [optional] 
**BlockProfiles** | Pointer to [**BlockInstructionTypeBlockProfiles**](BlockInstructionTypeBlockProfiles.md) |  | [optional] 
**BlockSecurity** | Pointer to [**BlockInstructionTypeBlockSecurity**](BlockInstructionTypeBlockSecurity.md) |  | [optional] 
**BlockStatistics** | Pointer to [**BlockStatisticsType**](BlockStatisticsType.md) |  | [optional] 
**Catering** | Pointer to [**CateringType**](CateringType.md) |  | [optional] 
**Comments** | Pointer to [**BlockInstructionTypeComments**](BlockInstructionTypeComments.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**ExternalAttributes** | Pointer to [**BlockInstructionTypeExternalAttributes**](BlockInstructionTypeExternalAttributes.md) |  | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**GenericRoomAllocations** | Pointer to [**BlockInstructionTypeGenericRoomAllocations**](BlockInstructionTypeGenericRoomAllocations.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**InventoryItems** | Pointer to [**[]BlockInventoryItemType**](BlockInventoryItemType.md) | Inventory item attached to a block. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this block as recently accessed. | [optional] 
**MasterBlockInfo** | Pointer to [**MasterBlockInfoType**](MasterBlockInfoType.md) |  | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**RatePrograms** | Pointer to [**[]RateProgramType**](RateProgramType.md) | Rate Program contains rate information required for block creation, like room pool, rate amount, market code, etc. Only available if configured in OPERA Cloud. | [optional] 
**ReservationDetails** | Pointer to [**BlockReservationDetailsType**](BlockReservationDetailsType.md) |  | [optional] 
**ReservationPolicies** | Pointer to [**[]ReservationPoliciesType**](ReservationPoliciesType.md) | A list of reservation policies. | [optional] 
**ResponseInstructions** | Pointer to [**BlockInstructionTypeResponseInstructions**](BlockInstructionTypeResponseInstructions.md) |  | [optional] 
**Restrictions** | Pointer to [**BlockRestrictionsType**](BlockRestrictionsType.md) |  | [optional] 
**RoomAllocations** | Pointer to [**BlockInstructionTypeRoomAllocations**](BlockInstructionTypeRoomAllocations.md) |  | [optional] 
**SellMessages** | Pointer to [**SellMessageConfigsType**](SellMessageConfigsType.md) |  | [optional] 
**Statistics** | Pointer to [**[]BlockStatisticsSummaryType**](BlockStatisticsSummaryType.md) | Statistics summary information including Rooms Sold, Room Revenue, Food and Beverage Revenue, Average Room Rate,etc. | [optional] 
**Traces** | Pointer to [**[]BlockTraceType**](BlockTraceType.md) | List of Block traces. | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**WashSchedules** | Pointer to [**[]BlockWashScheduleType**](BlockWashScheduleType.md) | Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type. | [optional] 

## Methods

### NewBlockInstructionType

`func NewBlockInstructionType() *BlockInstructionType`

NewBlockInstructionType instantiates a new BlockInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInstructionTypeWithDefaults

`func NewBlockInstructionTypeWithDefaults() *BlockInstructionType`

NewBlockInstructionTypeWithDefaults instantiates a new BlockInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessExclusions

`func (o *BlockInstructionType) GetAccessExclusions() BlockAccessExclusionsType`

GetAccessExclusions returns the AccessExclusions field if non-nil, zero value otherwise.

### GetAccessExclusionsOk

`func (o *BlockInstructionType) GetAccessExclusionsOk() (*BlockAccessExclusionsType, bool)`

GetAccessExclusionsOk returns a tuple with the AccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessExclusions

`func (o *BlockInstructionType) SetAccessExclusions(v BlockAccessExclusionsType)`

SetAccessExclusions sets AccessExclusions field to given value.

### HasAccessExclusions

`func (o *BlockInstructionType) HasAccessExclusions() bool`

HasAccessExclusions returns a boolean if a field has been set.

### GetAlternateDates

`func (o *BlockInstructionType) GetAlternateDates() []BlockAlternateDateType`

GetAlternateDates returns the AlternateDates field if non-nil, zero value otherwise.

### GetAlternateDatesOk

`func (o *BlockInstructionType) GetAlternateDatesOk() (*[]BlockAlternateDateType, bool)`

GetAlternateDatesOk returns a tuple with the AlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateDates

`func (o *BlockInstructionType) SetAlternateDates(v []BlockAlternateDateType)`

SetAlternateDates sets AlternateDates field to given value.

### HasAlternateDates

`func (o *BlockInstructionType) HasAlternateDates() bool`

HasAlternateDates returns a boolean if a field has been set.

### GetAttachments

`func (o *BlockInstructionType) GetAttachments() []AttachmentType`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *BlockInstructionType) GetAttachmentsOk() (*[]AttachmentType, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *BlockInstructionType) SetAttachments(v []AttachmentType)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *BlockInstructionType) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetBlockDetails

`func (o *BlockInstructionType) GetBlockDetails() BlockDetailsType`

GetBlockDetails returns the BlockDetails field if non-nil, zero value otherwise.

### GetBlockDetailsOk

`func (o *BlockInstructionType) GetBlockDetailsOk() (*BlockDetailsType, bool)`

GetBlockDetailsOk returns a tuple with the BlockDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDetails

`func (o *BlockInstructionType) SetBlockDetails(v BlockDetailsType)`

SetBlockDetails sets BlockDetails field to given value.

### HasBlockDetails

`func (o *BlockInstructionType) HasBlockDetails() bool`

HasBlockDetails returns a boolean if a field has been set.

### GetBlockIdList

`func (o *BlockInstructionType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlockInstructionType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlockInstructionType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlockInstructionType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockIndicators

`func (o *BlockInstructionType) GetBlockIndicators() []IndicatorType`

GetBlockIndicators returns the BlockIndicators field if non-nil, zero value otherwise.

### GetBlockIndicatorsOk

`func (o *BlockInstructionType) GetBlockIndicatorsOk() (*[]IndicatorType, bool)`

GetBlockIndicatorsOk returns a tuple with the BlockIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIndicators

`func (o *BlockInstructionType) SetBlockIndicators(v []IndicatorType)`

SetBlockIndicators sets BlockIndicators field to given value.

### HasBlockIndicators

`func (o *BlockInstructionType) HasBlockIndicators() bool`

HasBlockIndicators returns a boolean if a field has been set.

### GetBlockOwners

`func (o *BlockInstructionType) GetBlockOwners() BlockOwnersType`

GetBlockOwners returns the BlockOwners field if non-nil, zero value otherwise.

### GetBlockOwnersOk

`func (o *BlockInstructionType) GetBlockOwnersOk() (*BlockOwnersType, bool)`

GetBlockOwnersOk returns a tuple with the BlockOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockOwners

`func (o *BlockInstructionType) SetBlockOwners(v BlockOwnersType)`

SetBlockOwners sets BlockOwners field to given value.

### HasBlockOwners

`func (o *BlockInstructionType) HasBlockOwners() bool`

HasBlockOwners returns a boolean if a field has been set.

### GetBlockPackages

`func (o *BlockInstructionType) GetBlockPackages() []BlockPackageType`

GetBlockPackages returns the BlockPackages field if non-nil, zero value otherwise.

### GetBlockPackagesOk

`func (o *BlockInstructionType) GetBlockPackagesOk() (*[]BlockPackageType, bool)`

GetBlockPackagesOk returns a tuple with the BlockPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockPackages

`func (o *BlockInstructionType) SetBlockPackages(v []BlockPackageType)`

SetBlockPackages sets BlockPackages field to given value.

### HasBlockPackages

`func (o *BlockInstructionType) HasBlockPackages() bool`

HasBlockPackages returns a boolean if a field has been set.

### GetBlockProfiles

`func (o *BlockInstructionType) GetBlockProfiles() BlockInstructionTypeBlockProfiles`

GetBlockProfiles returns the BlockProfiles field if non-nil, zero value otherwise.

### GetBlockProfilesOk

`func (o *BlockInstructionType) GetBlockProfilesOk() (*BlockInstructionTypeBlockProfiles, bool)`

GetBlockProfilesOk returns a tuple with the BlockProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockProfiles

`func (o *BlockInstructionType) SetBlockProfiles(v BlockInstructionTypeBlockProfiles)`

SetBlockProfiles sets BlockProfiles field to given value.

### HasBlockProfiles

`func (o *BlockInstructionType) HasBlockProfiles() bool`

HasBlockProfiles returns a boolean if a field has been set.

### GetBlockSecurity

`func (o *BlockInstructionType) GetBlockSecurity() BlockInstructionTypeBlockSecurity`

GetBlockSecurity returns the BlockSecurity field if non-nil, zero value otherwise.

### GetBlockSecurityOk

`func (o *BlockInstructionType) GetBlockSecurityOk() (*BlockInstructionTypeBlockSecurity, bool)`

GetBlockSecurityOk returns a tuple with the BlockSecurity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSecurity

`func (o *BlockInstructionType) SetBlockSecurity(v BlockInstructionTypeBlockSecurity)`

SetBlockSecurity sets BlockSecurity field to given value.

### HasBlockSecurity

`func (o *BlockInstructionType) HasBlockSecurity() bool`

HasBlockSecurity returns a boolean if a field has been set.

### GetBlockStatistics

`func (o *BlockInstructionType) GetBlockStatistics() BlockStatisticsType`

GetBlockStatistics returns the BlockStatistics field if non-nil, zero value otherwise.

### GetBlockStatisticsOk

`func (o *BlockInstructionType) GetBlockStatisticsOk() (*BlockStatisticsType, bool)`

GetBlockStatisticsOk returns a tuple with the BlockStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatistics

`func (o *BlockInstructionType) SetBlockStatistics(v BlockStatisticsType)`

SetBlockStatistics sets BlockStatistics field to given value.

### HasBlockStatistics

`func (o *BlockInstructionType) HasBlockStatistics() bool`

HasBlockStatistics returns a boolean if a field has been set.

### GetCatering

`func (o *BlockInstructionType) GetCatering() CateringType`

GetCatering returns the Catering field if non-nil, zero value otherwise.

### GetCateringOk

`func (o *BlockInstructionType) GetCateringOk() (*CateringType, bool)`

GetCateringOk returns a tuple with the Catering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatering

`func (o *BlockInstructionType) SetCatering(v CateringType)`

SetCatering sets Catering field to given value.

### HasCatering

`func (o *BlockInstructionType) HasCatering() bool`

HasCatering returns a boolean if a field has been set.

### GetComments

`func (o *BlockInstructionType) GetComments() BlockInstructionTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *BlockInstructionType) GetCommentsOk() (*BlockInstructionTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *BlockInstructionType) SetComments(v BlockInstructionTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *BlockInstructionType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *BlockInstructionType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *BlockInstructionType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *BlockInstructionType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *BlockInstructionType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *BlockInstructionType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *BlockInstructionType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *BlockInstructionType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *BlockInstructionType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetExternalAttributes

`func (o *BlockInstructionType) GetExternalAttributes() BlockInstructionTypeExternalAttributes`

GetExternalAttributes returns the ExternalAttributes field if non-nil, zero value otherwise.

### GetExternalAttributesOk

`func (o *BlockInstructionType) GetExternalAttributesOk() (*BlockInstructionTypeExternalAttributes, bool)`

GetExternalAttributesOk returns a tuple with the ExternalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalAttributes

`func (o *BlockInstructionType) SetExternalAttributes(v BlockInstructionTypeExternalAttributes)`

SetExternalAttributes sets ExternalAttributes field to given value.

### HasExternalAttributes

`func (o *BlockInstructionType) HasExternalAttributes() bool`

HasExternalAttributes returns a boolean if a field has been set.

### GetExternalReferences

`func (o *BlockInstructionType) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *BlockInstructionType) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *BlockInstructionType) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *BlockInstructionType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetGenericRoomAllocations

`func (o *BlockInstructionType) GetGenericRoomAllocations() BlockInstructionTypeGenericRoomAllocations`

GetGenericRoomAllocations returns the GenericRoomAllocations field if non-nil, zero value otherwise.

### GetGenericRoomAllocationsOk

`func (o *BlockInstructionType) GetGenericRoomAllocationsOk() (*BlockInstructionTypeGenericRoomAllocations, bool)`

GetGenericRoomAllocationsOk returns a tuple with the GenericRoomAllocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomAllocations

`func (o *BlockInstructionType) SetGenericRoomAllocations(v BlockInstructionTypeGenericRoomAllocations)`

SetGenericRoomAllocations sets GenericRoomAllocations field to given value.

### HasGenericRoomAllocations

`func (o *BlockInstructionType) HasGenericRoomAllocations() bool`

HasGenericRoomAllocations returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockInstructionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockInstructionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockInstructionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockInstructionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInventoryItems

`func (o *BlockInstructionType) GetInventoryItems() []BlockInventoryItemType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *BlockInstructionType) GetInventoryItemsOk() (*[]BlockInventoryItemType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *BlockInstructionType) SetInventoryItems(v []BlockInventoryItemType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *BlockInstructionType) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetLastModifierId

`func (o *BlockInstructionType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *BlockInstructionType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *BlockInstructionType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *BlockInstructionType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *BlockInstructionType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *BlockInstructionType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *BlockInstructionType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *BlockInstructionType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *BlockInstructionType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *BlockInstructionType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *BlockInstructionType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *BlockInstructionType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetMasterBlockInfo

`func (o *BlockInstructionType) GetMasterBlockInfo() MasterBlockInfoType`

GetMasterBlockInfo returns the MasterBlockInfo field if non-nil, zero value otherwise.

### GetMasterBlockInfoOk

`func (o *BlockInstructionType) GetMasterBlockInfoOk() (*MasterBlockInfoType, bool)`

GetMasterBlockInfoOk returns a tuple with the MasterBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterBlockInfo

`func (o *BlockInstructionType) SetMasterBlockInfo(v MasterBlockInfoType)`

SetMasterBlockInfo sets MasterBlockInfo field to given value.

### HasMasterBlockInfo

`func (o *BlockInstructionType) HasMasterBlockInfo() bool`

HasMasterBlockInfo returns a boolean if a field has been set.

### GetPurgeDate

`func (o *BlockInstructionType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *BlockInstructionType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *BlockInstructionType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *BlockInstructionType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetRatePrograms

`func (o *BlockInstructionType) GetRatePrograms() []RateProgramType`

GetRatePrograms returns the RatePrograms field if non-nil, zero value otherwise.

### GetRateProgramsOk

`func (o *BlockInstructionType) GetRateProgramsOk() (*[]RateProgramType, bool)`

GetRateProgramsOk returns a tuple with the RatePrograms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePrograms

`func (o *BlockInstructionType) SetRatePrograms(v []RateProgramType)`

SetRatePrograms sets RatePrograms field to given value.

### HasRatePrograms

`func (o *BlockInstructionType) HasRatePrograms() bool`

HasRatePrograms returns a boolean if a field has been set.

### GetReservationDetails

`func (o *BlockInstructionType) GetReservationDetails() BlockReservationDetailsType`

GetReservationDetails returns the ReservationDetails field if non-nil, zero value otherwise.

### GetReservationDetailsOk

`func (o *BlockInstructionType) GetReservationDetailsOk() (*BlockReservationDetailsType, bool)`

GetReservationDetailsOk returns a tuple with the ReservationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDetails

`func (o *BlockInstructionType) SetReservationDetails(v BlockReservationDetailsType)`

SetReservationDetails sets ReservationDetails field to given value.

### HasReservationDetails

`func (o *BlockInstructionType) HasReservationDetails() bool`

HasReservationDetails returns a boolean if a field has been set.

### GetReservationPolicies

`func (o *BlockInstructionType) GetReservationPolicies() []ReservationPoliciesType`

GetReservationPolicies returns the ReservationPolicies field if non-nil, zero value otherwise.

### GetReservationPoliciesOk

`func (o *BlockInstructionType) GetReservationPoliciesOk() (*[]ReservationPoliciesType, bool)`

GetReservationPoliciesOk returns a tuple with the ReservationPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPolicies

`func (o *BlockInstructionType) SetReservationPolicies(v []ReservationPoliciesType)`

SetReservationPolicies sets ReservationPolicies field to given value.

### HasReservationPolicies

`func (o *BlockInstructionType) HasReservationPolicies() bool`

HasReservationPolicies returns a boolean if a field has been set.

### GetResponseInstructions

`func (o *BlockInstructionType) GetResponseInstructions() BlockInstructionTypeResponseInstructions`

GetResponseInstructions returns the ResponseInstructions field if non-nil, zero value otherwise.

### GetResponseInstructionsOk

`func (o *BlockInstructionType) GetResponseInstructionsOk() (*BlockInstructionTypeResponseInstructions, bool)`

GetResponseInstructionsOk returns a tuple with the ResponseInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstructions

`func (o *BlockInstructionType) SetResponseInstructions(v BlockInstructionTypeResponseInstructions)`

SetResponseInstructions sets ResponseInstructions field to given value.

### HasResponseInstructions

`func (o *BlockInstructionType) HasResponseInstructions() bool`

HasResponseInstructions returns a boolean if a field has been set.

### GetRestrictions

`func (o *BlockInstructionType) GetRestrictions() BlockRestrictionsType`

GetRestrictions returns the Restrictions field if non-nil, zero value otherwise.

### GetRestrictionsOk

`func (o *BlockInstructionType) GetRestrictionsOk() (*BlockRestrictionsType, bool)`

GetRestrictionsOk returns a tuple with the Restrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictions

`func (o *BlockInstructionType) SetRestrictions(v BlockRestrictionsType)`

SetRestrictions sets Restrictions field to given value.

### HasRestrictions

`func (o *BlockInstructionType) HasRestrictions() bool`

HasRestrictions returns a boolean if a field has been set.

### GetRoomAllocations

`func (o *BlockInstructionType) GetRoomAllocations() BlockInstructionTypeRoomAllocations`

GetRoomAllocations returns the RoomAllocations field if non-nil, zero value otherwise.

### GetRoomAllocationsOk

`func (o *BlockInstructionType) GetRoomAllocationsOk() (*BlockInstructionTypeRoomAllocations, bool)`

GetRoomAllocationsOk returns a tuple with the RoomAllocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAllocations

`func (o *BlockInstructionType) SetRoomAllocations(v BlockInstructionTypeRoomAllocations)`

SetRoomAllocations sets RoomAllocations field to given value.

### HasRoomAllocations

`func (o *BlockInstructionType) HasRoomAllocations() bool`

HasRoomAllocations returns a boolean if a field has been set.

### GetSellMessages

`func (o *BlockInstructionType) GetSellMessages() SellMessageConfigsType`

GetSellMessages returns the SellMessages field if non-nil, zero value otherwise.

### GetSellMessagesOk

`func (o *BlockInstructionType) GetSellMessagesOk() (*SellMessageConfigsType, bool)`

GetSellMessagesOk returns a tuple with the SellMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessages

`func (o *BlockInstructionType) SetSellMessages(v SellMessageConfigsType)`

SetSellMessages sets SellMessages field to given value.

### HasSellMessages

`func (o *BlockInstructionType) HasSellMessages() bool`

HasSellMessages returns a boolean if a field has been set.

### GetStatistics

`func (o *BlockInstructionType) GetStatistics() []BlockStatisticsSummaryType`

GetStatistics returns the Statistics field if non-nil, zero value otherwise.

### GetStatisticsOk

`func (o *BlockInstructionType) GetStatisticsOk() (*[]BlockStatisticsSummaryType, bool)`

GetStatisticsOk returns a tuple with the Statistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatistics

`func (o *BlockInstructionType) SetStatistics(v []BlockStatisticsSummaryType)`

SetStatistics sets Statistics field to given value.

### HasStatistics

`func (o *BlockInstructionType) HasStatistics() bool`

HasStatistics returns a boolean if a field has been set.

### GetTraces

`func (o *BlockInstructionType) GetTraces() []BlockTraceType`

GetTraces returns the Traces field if non-nil, zero value otherwise.

### GetTracesOk

`func (o *BlockInstructionType) GetTracesOk() (*[]BlockTraceType, bool)`

GetTracesOk returns a tuple with the Traces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraces

`func (o *BlockInstructionType) SetTraces(v []BlockTraceType)`

SetTraces sets Traces field to given value.

### HasTraces

`func (o *BlockInstructionType) HasTraces() bool`

HasTraces returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *BlockInstructionType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *BlockInstructionType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *BlockInstructionType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *BlockInstructionType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWashSchedules

`func (o *BlockInstructionType) GetWashSchedules() []BlockWashScheduleType`

GetWashSchedules returns the WashSchedules field if non-nil, zero value otherwise.

### GetWashSchedulesOk

`func (o *BlockInstructionType) GetWashSchedulesOk() (*[]BlockWashScheduleType, bool)`

GetWashSchedulesOk returns a tuple with the WashSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashSchedules

`func (o *BlockInstructionType) SetWashSchedules(v []BlockWashScheduleType)`

SetWashSchedules sets WashSchedules field to given value.

### HasWashSchedules

`func (o *BlockInstructionType) HasWashSchedules() bool`

HasWashSchedules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


