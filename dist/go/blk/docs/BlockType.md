# BlockType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**BlockDetails** | Pointer to [**BlockDetailsType**](BlockDetailsType.md) |  | [optional] 
**BlockOwners** | Pointer to [**BlockOwnersType**](BlockOwnersType.md) |  | [optional] 
**MasterBlockInfo** | Pointer to [**MasterBlockInfoType**](MasterBlockInfoType.md) |  | [optional] 
**ReservationPolicies** | Pointer to [**[]ReservationPoliciesType**](ReservationPoliciesType.md) | A list of reservation policies. | [optional] 
**ReservationDetails** | Pointer to [**BlockReservationDetailsType**](BlockReservationDetailsType.md) |  | [optional] 
**Catering** | Pointer to [**CateringType**](CateringType.md) |  | [optional] 
**BlockProfiles** | Pointer to [**SubAllocationTypeBlockProfiles**](SubAllocationTypeBlockProfiles.md) |  | [optional] 
**BlockPackages** | Pointer to [**[]BlockPackageType**](BlockPackageType.md) | A Block Package represents a non-room product provided to guests. Block Pacakges may have associated inventory and charges. | [optional] 
**InventoryItems** | Pointer to [**[]BlockInventoryItemType**](BlockInventoryItemType.md) | Inventory item attached to a block. | [optional] 
**BlockStatistics** | Pointer to [**BlockStatisticsType**](BlockStatisticsType.md) |  | [optional] 
**Comments** | Pointer to [**SubAllocationTypeComments**](SubAllocationTypeComments.md) |  | [optional] 
**RoomAllocations** | Pointer to [**SubAllocationTypeRoomAllocations**](SubAllocationTypeRoomAllocations.md) |  | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**BlockIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**Traces** | Pointer to [**[]BlockTraceType**](BlockTraceType.md) | List of Block traces. | [optional] 
**Statistics** | Pointer to [**[]BlockStatisticsSummaryType**](BlockStatisticsSummaryType.md) | Statistics summary information including Rooms Sold, Room Revenue, Food and Beverage Revenue, Average Room Rate,etc. | [optional] 
**BlockSecurity** | Pointer to [**SubAllocationTypeBlockSecurity**](SubAllocationTypeBlockSecurity.md) |  | [optional] 
**RatePrograms** | Pointer to [**[]RateProgramType**](RateProgramType.md) | Rate Program contains rate information required for block creation, like room pool, rate amount, market code, etc. Only available if configured in OPERA Cloud. | [optional] 
**ExternalAttributes** | Pointer to [**SubAllocationTypeExternalAttributes**](SubAllocationTypeExternalAttributes.md) |  | [optional] 
**GenericRoomAllocations** | Pointer to [**SubAllocationTypeGenericRoomAllocations**](SubAllocationTypeGenericRoomAllocations.md) |  | [optional] 
**AlternateDates** | Pointer to [**[]BlockAlternateDateType**](BlockAlternateDateType.md) | Alternate Date information for the Block. | [optional] 
**SellMessages** | Pointer to [**SellMessageConfigsType**](SellMessageConfigsType.md) |  | [optional] 
**Attachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**WashSchedules** | Pointer to [**[]BlockWashScheduleType**](BlockWashScheduleType.md) | Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type. | [optional] 
**Restrictions** | Pointer to [**BlockRestrictionsType**](BlockRestrictionsType.md) |  | [optional] 
**AccessExclusions** | Pointer to [**BlockAccessExclusionsType**](BlockAccessExclusionsType.md) |  | [optional] 
**CentralSalesLeads** | Pointer to [**CentralSalesLeadsType**](CentralSalesLeadsType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this block as recently accessed. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
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

### GetMasterBlockInfo

`func (o *BlockType) GetMasterBlockInfo() MasterBlockInfoType`

GetMasterBlockInfo returns the MasterBlockInfo field if non-nil, zero value otherwise.

### GetMasterBlockInfoOk

`func (o *BlockType) GetMasterBlockInfoOk() (*MasterBlockInfoType, bool)`

GetMasterBlockInfoOk returns a tuple with the MasterBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterBlockInfo

`func (o *BlockType) SetMasterBlockInfo(v MasterBlockInfoType)`

SetMasterBlockInfo sets MasterBlockInfo field to given value.

### HasMasterBlockInfo

`func (o *BlockType) HasMasterBlockInfo() bool`

HasMasterBlockInfo returns a boolean if a field has been set.

### GetReservationPolicies

`func (o *BlockType) GetReservationPolicies() []ReservationPoliciesType`

GetReservationPolicies returns the ReservationPolicies field if non-nil, zero value otherwise.

### GetReservationPoliciesOk

`func (o *BlockType) GetReservationPoliciesOk() (*[]ReservationPoliciesType, bool)`

GetReservationPoliciesOk returns a tuple with the ReservationPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPolicies

`func (o *BlockType) SetReservationPolicies(v []ReservationPoliciesType)`

SetReservationPolicies sets ReservationPolicies field to given value.

### HasReservationPolicies

`func (o *BlockType) HasReservationPolicies() bool`

HasReservationPolicies returns a boolean if a field has been set.

### GetReservationDetails

`func (o *BlockType) GetReservationDetails() BlockReservationDetailsType`

GetReservationDetails returns the ReservationDetails field if non-nil, zero value otherwise.

### GetReservationDetailsOk

`func (o *BlockType) GetReservationDetailsOk() (*BlockReservationDetailsType, bool)`

GetReservationDetailsOk returns a tuple with the ReservationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDetails

`func (o *BlockType) SetReservationDetails(v BlockReservationDetailsType)`

SetReservationDetails sets ReservationDetails field to given value.

### HasReservationDetails

`func (o *BlockType) HasReservationDetails() bool`

HasReservationDetails returns a boolean if a field has been set.

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

`func (o *BlockType) GetBlockProfiles() SubAllocationTypeBlockProfiles`

GetBlockProfiles returns the BlockProfiles field if non-nil, zero value otherwise.

### GetBlockProfilesOk

`func (o *BlockType) GetBlockProfilesOk() (*SubAllocationTypeBlockProfiles, bool)`

GetBlockProfilesOk returns a tuple with the BlockProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockProfiles

`func (o *BlockType) SetBlockProfiles(v SubAllocationTypeBlockProfiles)`

SetBlockProfiles sets BlockProfiles field to given value.

### HasBlockProfiles

`func (o *BlockType) HasBlockProfiles() bool`

HasBlockProfiles returns a boolean if a field has been set.

### GetBlockPackages

`func (o *BlockType) GetBlockPackages() []BlockPackageType`

GetBlockPackages returns the BlockPackages field if non-nil, zero value otherwise.

### GetBlockPackagesOk

`func (o *BlockType) GetBlockPackagesOk() (*[]BlockPackageType, bool)`

GetBlockPackagesOk returns a tuple with the BlockPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockPackages

`func (o *BlockType) SetBlockPackages(v []BlockPackageType)`

SetBlockPackages sets BlockPackages field to given value.

### HasBlockPackages

`func (o *BlockType) HasBlockPackages() bool`

HasBlockPackages returns a boolean if a field has been set.

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

`func (o *BlockType) GetComments() SubAllocationTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *BlockType) GetCommentsOk() (*SubAllocationTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *BlockType) SetComments(v SubAllocationTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *BlockType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetRoomAllocations

`func (o *BlockType) GetRoomAllocations() SubAllocationTypeRoomAllocations`

GetRoomAllocations returns the RoomAllocations field if non-nil, zero value otherwise.

### GetRoomAllocationsOk

`func (o *BlockType) GetRoomAllocationsOk() (*SubAllocationTypeRoomAllocations, bool)`

GetRoomAllocationsOk returns a tuple with the RoomAllocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAllocations

`func (o *BlockType) SetRoomAllocations(v SubAllocationTypeRoomAllocations)`

SetRoomAllocations sets RoomAllocations field to given value.

### HasRoomAllocations

`func (o *BlockType) HasRoomAllocations() bool`

HasRoomAllocations returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *BlockType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *BlockType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *BlockType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *BlockType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

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

`func (o *BlockType) GetBlockSecurity() SubAllocationTypeBlockSecurity`

GetBlockSecurity returns the BlockSecurity field if non-nil, zero value otherwise.

### GetBlockSecurityOk

`func (o *BlockType) GetBlockSecurityOk() (*SubAllocationTypeBlockSecurity, bool)`

GetBlockSecurityOk returns a tuple with the BlockSecurity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSecurity

`func (o *BlockType) SetBlockSecurity(v SubAllocationTypeBlockSecurity)`

SetBlockSecurity sets BlockSecurity field to given value.

### HasBlockSecurity

`func (o *BlockType) HasBlockSecurity() bool`

HasBlockSecurity returns a boolean if a field has been set.

### GetRatePrograms

`func (o *BlockType) GetRatePrograms() []RateProgramType`

GetRatePrograms returns the RatePrograms field if non-nil, zero value otherwise.

### GetRateProgramsOk

`func (o *BlockType) GetRateProgramsOk() (*[]RateProgramType, bool)`

GetRateProgramsOk returns a tuple with the RatePrograms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePrograms

`func (o *BlockType) SetRatePrograms(v []RateProgramType)`

SetRatePrograms sets RatePrograms field to given value.

### HasRatePrograms

`func (o *BlockType) HasRatePrograms() bool`

HasRatePrograms returns a boolean if a field has been set.

### GetExternalAttributes

`func (o *BlockType) GetExternalAttributes() SubAllocationTypeExternalAttributes`

GetExternalAttributes returns the ExternalAttributes field if non-nil, zero value otherwise.

### GetExternalAttributesOk

`func (o *BlockType) GetExternalAttributesOk() (*SubAllocationTypeExternalAttributes, bool)`

GetExternalAttributesOk returns a tuple with the ExternalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalAttributes

`func (o *BlockType) SetExternalAttributes(v SubAllocationTypeExternalAttributes)`

SetExternalAttributes sets ExternalAttributes field to given value.

### HasExternalAttributes

`func (o *BlockType) HasExternalAttributes() bool`

HasExternalAttributes returns a boolean if a field has been set.

### GetGenericRoomAllocations

`func (o *BlockType) GetGenericRoomAllocations() SubAllocationTypeGenericRoomAllocations`

GetGenericRoomAllocations returns the GenericRoomAllocations field if non-nil, zero value otherwise.

### GetGenericRoomAllocationsOk

`func (o *BlockType) GetGenericRoomAllocationsOk() (*SubAllocationTypeGenericRoomAllocations, bool)`

GetGenericRoomAllocationsOk returns a tuple with the GenericRoomAllocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomAllocations

`func (o *BlockType) SetGenericRoomAllocations(v SubAllocationTypeGenericRoomAllocations)`

SetGenericRoomAllocations sets GenericRoomAllocations field to given value.

### HasGenericRoomAllocations

`func (o *BlockType) HasGenericRoomAllocations() bool`

HasGenericRoomAllocations returns a boolean if a field has been set.

### GetAlternateDates

`func (o *BlockType) GetAlternateDates() []BlockAlternateDateType`

GetAlternateDates returns the AlternateDates field if non-nil, zero value otherwise.

### GetAlternateDatesOk

`func (o *BlockType) GetAlternateDatesOk() (*[]BlockAlternateDateType, bool)`

GetAlternateDatesOk returns a tuple with the AlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateDates

`func (o *BlockType) SetAlternateDates(v []BlockAlternateDateType)`

SetAlternateDates sets AlternateDates field to given value.

### HasAlternateDates

`func (o *BlockType) HasAlternateDates() bool`

HasAlternateDates returns a boolean if a field has been set.

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

### GetAccessExclusions

`func (o *BlockType) GetAccessExclusions() BlockAccessExclusionsType`

GetAccessExclusions returns the AccessExclusions field if non-nil, zero value otherwise.

### GetAccessExclusionsOk

`func (o *BlockType) GetAccessExclusionsOk() (*BlockAccessExclusionsType, bool)`

GetAccessExclusionsOk returns a tuple with the AccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessExclusions

`func (o *BlockType) SetAccessExclusions(v BlockAccessExclusionsType)`

SetAccessExclusions sets AccessExclusions field to given value.

### HasAccessExclusions

`func (o *BlockType) HasAccessExclusions() bool`

HasAccessExclusions returns a boolean if a field has been set.

### GetCentralSalesLeads

`func (o *BlockType) GetCentralSalesLeads() CentralSalesLeadsType`

GetCentralSalesLeads returns the CentralSalesLeads field if non-nil, zero value otherwise.

### GetCentralSalesLeadsOk

`func (o *BlockType) GetCentralSalesLeadsOk() (*CentralSalesLeadsType, bool)`

GetCentralSalesLeadsOk returns a tuple with the CentralSalesLeads field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralSalesLeads

`func (o *BlockType) SetCentralSalesLeads(v CentralSalesLeadsType)`

SetCentralSalesLeads sets CentralSalesLeads field to given value.

### HasCentralSalesLeads

`func (o *BlockType) HasCentralSalesLeads() bool`

HasCentralSalesLeads returns a boolean if a field has been set.

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

`func (o *BlockType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *BlockType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *BlockType) SetCreateDateTime(v string)`

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

`func (o *BlockType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *BlockType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *BlockType) SetLastModifyDateTime(v string)`

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


