# SubAllocationType

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
**HotelId** | Pointer to **string** |  | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this block as recently accessed. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**MasterAllocationInfo** | Pointer to [**MasterSubBlockBaseInfoType**](MasterSubBlockBaseInfoType.md) |  | [optional] 

## Methods

### NewSubAllocationType

`func NewSubAllocationType() *SubAllocationType`

NewSubAllocationType instantiates a new SubAllocationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubAllocationTypeWithDefaults

`func NewSubAllocationTypeWithDefaults() *SubAllocationType`

NewSubAllocationTypeWithDefaults instantiates a new SubAllocationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *SubAllocationType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *SubAllocationType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *SubAllocationType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *SubAllocationType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *SubAllocationType) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *SubAllocationType) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *SubAllocationType) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *SubAllocationType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetBlockDetails

`func (o *SubAllocationType) GetBlockDetails() BlockDetailsType`

GetBlockDetails returns the BlockDetails field if non-nil, zero value otherwise.

### GetBlockDetailsOk

`func (o *SubAllocationType) GetBlockDetailsOk() (*BlockDetailsType, bool)`

GetBlockDetailsOk returns a tuple with the BlockDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDetails

`func (o *SubAllocationType) SetBlockDetails(v BlockDetailsType)`

SetBlockDetails sets BlockDetails field to given value.

### HasBlockDetails

`func (o *SubAllocationType) HasBlockDetails() bool`

HasBlockDetails returns a boolean if a field has been set.

### GetBlockOwners

`func (o *SubAllocationType) GetBlockOwners() BlockOwnersType`

GetBlockOwners returns the BlockOwners field if non-nil, zero value otherwise.

### GetBlockOwnersOk

`func (o *SubAllocationType) GetBlockOwnersOk() (*BlockOwnersType, bool)`

GetBlockOwnersOk returns a tuple with the BlockOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockOwners

`func (o *SubAllocationType) SetBlockOwners(v BlockOwnersType)`

SetBlockOwners sets BlockOwners field to given value.

### HasBlockOwners

`func (o *SubAllocationType) HasBlockOwners() bool`

HasBlockOwners returns a boolean if a field has been set.

### GetMasterBlockInfo

`func (o *SubAllocationType) GetMasterBlockInfo() MasterBlockInfoType`

GetMasterBlockInfo returns the MasterBlockInfo field if non-nil, zero value otherwise.

### GetMasterBlockInfoOk

`func (o *SubAllocationType) GetMasterBlockInfoOk() (*MasterBlockInfoType, bool)`

GetMasterBlockInfoOk returns a tuple with the MasterBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterBlockInfo

`func (o *SubAllocationType) SetMasterBlockInfo(v MasterBlockInfoType)`

SetMasterBlockInfo sets MasterBlockInfo field to given value.

### HasMasterBlockInfo

`func (o *SubAllocationType) HasMasterBlockInfo() bool`

HasMasterBlockInfo returns a boolean if a field has been set.

### GetReservationPolicies

`func (o *SubAllocationType) GetReservationPolicies() []ReservationPoliciesType`

GetReservationPolicies returns the ReservationPolicies field if non-nil, zero value otherwise.

### GetReservationPoliciesOk

`func (o *SubAllocationType) GetReservationPoliciesOk() (*[]ReservationPoliciesType, bool)`

GetReservationPoliciesOk returns a tuple with the ReservationPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPolicies

`func (o *SubAllocationType) SetReservationPolicies(v []ReservationPoliciesType)`

SetReservationPolicies sets ReservationPolicies field to given value.

### HasReservationPolicies

`func (o *SubAllocationType) HasReservationPolicies() bool`

HasReservationPolicies returns a boolean if a field has been set.

### GetReservationDetails

`func (o *SubAllocationType) GetReservationDetails() BlockReservationDetailsType`

GetReservationDetails returns the ReservationDetails field if non-nil, zero value otherwise.

### GetReservationDetailsOk

`func (o *SubAllocationType) GetReservationDetailsOk() (*BlockReservationDetailsType, bool)`

GetReservationDetailsOk returns a tuple with the ReservationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDetails

`func (o *SubAllocationType) SetReservationDetails(v BlockReservationDetailsType)`

SetReservationDetails sets ReservationDetails field to given value.

### HasReservationDetails

`func (o *SubAllocationType) HasReservationDetails() bool`

HasReservationDetails returns a boolean if a field has been set.

### GetCatering

`func (o *SubAllocationType) GetCatering() CateringType`

GetCatering returns the Catering field if non-nil, zero value otherwise.

### GetCateringOk

`func (o *SubAllocationType) GetCateringOk() (*CateringType, bool)`

GetCateringOk returns a tuple with the Catering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatering

`func (o *SubAllocationType) SetCatering(v CateringType)`

SetCatering sets Catering field to given value.

### HasCatering

`func (o *SubAllocationType) HasCatering() bool`

HasCatering returns a boolean if a field has been set.

### GetBlockProfiles

`func (o *SubAllocationType) GetBlockProfiles() SubAllocationTypeBlockProfiles`

GetBlockProfiles returns the BlockProfiles field if non-nil, zero value otherwise.

### GetBlockProfilesOk

`func (o *SubAllocationType) GetBlockProfilesOk() (*SubAllocationTypeBlockProfiles, bool)`

GetBlockProfilesOk returns a tuple with the BlockProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockProfiles

`func (o *SubAllocationType) SetBlockProfiles(v SubAllocationTypeBlockProfiles)`

SetBlockProfiles sets BlockProfiles field to given value.

### HasBlockProfiles

`func (o *SubAllocationType) HasBlockProfiles() bool`

HasBlockProfiles returns a boolean if a field has been set.

### GetBlockPackages

`func (o *SubAllocationType) GetBlockPackages() []BlockPackageType`

GetBlockPackages returns the BlockPackages field if non-nil, zero value otherwise.

### GetBlockPackagesOk

`func (o *SubAllocationType) GetBlockPackagesOk() (*[]BlockPackageType, bool)`

GetBlockPackagesOk returns a tuple with the BlockPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockPackages

`func (o *SubAllocationType) SetBlockPackages(v []BlockPackageType)`

SetBlockPackages sets BlockPackages field to given value.

### HasBlockPackages

`func (o *SubAllocationType) HasBlockPackages() bool`

HasBlockPackages returns a boolean if a field has been set.

### GetInventoryItems

`func (o *SubAllocationType) GetInventoryItems() []BlockInventoryItemType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *SubAllocationType) GetInventoryItemsOk() (*[]BlockInventoryItemType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *SubAllocationType) SetInventoryItems(v []BlockInventoryItemType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *SubAllocationType) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetBlockStatistics

`func (o *SubAllocationType) GetBlockStatistics() BlockStatisticsType`

GetBlockStatistics returns the BlockStatistics field if non-nil, zero value otherwise.

### GetBlockStatisticsOk

`func (o *SubAllocationType) GetBlockStatisticsOk() (*BlockStatisticsType, bool)`

GetBlockStatisticsOk returns a tuple with the BlockStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatistics

`func (o *SubAllocationType) SetBlockStatistics(v BlockStatisticsType)`

SetBlockStatistics sets BlockStatistics field to given value.

### HasBlockStatistics

`func (o *SubAllocationType) HasBlockStatistics() bool`

HasBlockStatistics returns a boolean if a field has been set.

### GetComments

`func (o *SubAllocationType) GetComments() SubAllocationTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *SubAllocationType) GetCommentsOk() (*SubAllocationTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *SubAllocationType) SetComments(v SubAllocationTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *SubAllocationType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetRoomAllocations

`func (o *SubAllocationType) GetRoomAllocations() SubAllocationTypeRoomAllocations`

GetRoomAllocations returns the RoomAllocations field if non-nil, zero value otherwise.

### GetRoomAllocationsOk

`func (o *SubAllocationType) GetRoomAllocationsOk() (*SubAllocationTypeRoomAllocations, bool)`

GetRoomAllocationsOk returns a tuple with the RoomAllocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAllocations

`func (o *SubAllocationType) SetRoomAllocations(v SubAllocationTypeRoomAllocations)`

SetRoomAllocations sets RoomAllocations field to given value.

### HasRoomAllocations

`func (o *SubAllocationType) HasRoomAllocations() bool`

HasRoomAllocations returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *SubAllocationType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *SubAllocationType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *SubAllocationType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *SubAllocationType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetBlockIndicators

`func (o *SubAllocationType) GetBlockIndicators() []IndicatorType`

GetBlockIndicators returns the BlockIndicators field if non-nil, zero value otherwise.

### GetBlockIndicatorsOk

`func (o *SubAllocationType) GetBlockIndicatorsOk() (*[]IndicatorType, bool)`

GetBlockIndicatorsOk returns a tuple with the BlockIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIndicators

`func (o *SubAllocationType) SetBlockIndicators(v []IndicatorType)`

SetBlockIndicators sets BlockIndicators field to given value.

### HasBlockIndicators

`func (o *SubAllocationType) HasBlockIndicators() bool`

HasBlockIndicators returns a boolean if a field has been set.

### GetTraces

`func (o *SubAllocationType) GetTraces() []BlockTraceType`

GetTraces returns the Traces field if non-nil, zero value otherwise.

### GetTracesOk

`func (o *SubAllocationType) GetTracesOk() (*[]BlockTraceType, bool)`

GetTracesOk returns a tuple with the Traces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraces

`func (o *SubAllocationType) SetTraces(v []BlockTraceType)`

SetTraces sets Traces field to given value.

### HasTraces

`func (o *SubAllocationType) HasTraces() bool`

HasTraces returns a boolean if a field has been set.

### GetStatistics

`func (o *SubAllocationType) GetStatistics() []BlockStatisticsSummaryType`

GetStatistics returns the Statistics field if non-nil, zero value otherwise.

### GetStatisticsOk

`func (o *SubAllocationType) GetStatisticsOk() (*[]BlockStatisticsSummaryType, bool)`

GetStatisticsOk returns a tuple with the Statistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatistics

`func (o *SubAllocationType) SetStatistics(v []BlockStatisticsSummaryType)`

SetStatistics sets Statistics field to given value.

### HasStatistics

`func (o *SubAllocationType) HasStatistics() bool`

HasStatistics returns a boolean if a field has been set.

### GetBlockSecurity

`func (o *SubAllocationType) GetBlockSecurity() SubAllocationTypeBlockSecurity`

GetBlockSecurity returns the BlockSecurity field if non-nil, zero value otherwise.

### GetBlockSecurityOk

`func (o *SubAllocationType) GetBlockSecurityOk() (*SubAllocationTypeBlockSecurity, bool)`

GetBlockSecurityOk returns a tuple with the BlockSecurity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSecurity

`func (o *SubAllocationType) SetBlockSecurity(v SubAllocationTypeBlockSecurity)`

SetBlockSecurity sets BlockSecurity field to given value.

### HasBlockSecurity

`func (o *SubAllocationType) HasBlockSecurity() bool`

HasBlockSecurity returns a boolean if a field has been set.

### GetRatePrograms

`func (o *SubAllocationType) GetRatePrograms() []RateProgramType`

GetRatePrograms returns the RatePrograms field if non-nil, zero value otherwise.

### GetRateProgramsOk

`func (o *SubAllocationType) GetRateProgramsOk() (*[]RateProgramType, bool)`

GetRateProgramsOk returns a tuple with the RatePrograms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePrograms

`func (o *SubAllocationType) SetRatePrograms(v []RateProgramType)`

SetRatePrograms sets RatePrograms field to given value.

### HasRatePrograms

`func (o *SubAllocationType) HasRatePrograms() bool`

HasRatePrograms returns a boolean if a field has been set.

### GetExternalAttributes

`func (o *SubAllocationType) GetExternalAttributes() SubAllocationTypeExternalAttributes`

GetExternalAttributes returns the ExternalAttributes field if non-nil, zero value otherwise.

### GetExternalAttributesOk

`func (o *SubAllocationType) GetExternalAttributesOk() (*SubAllocationTypeExternalAttributes, bool)`

GetExternalAttributesOk returns a tuple with the ExternalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalAttributes

`func (o *SubAllocationType) SetExternalAttributes(v SubAllocationTypeExternalAttributes)`

SetExternalAttributes sets ExternalAttributes field to given value.

### HasExternalAttributes

`func (o *SubAllocationType) HasExternalAttributes() bool`

HasExternalAttributes returns a boolean if a field has been set.

### GetGenericRoomAllocations

`func (o *SubAllocationType) GetGenericRoomAllocations() SubAllocationTypeGenericRoomAllocations`

GetGenericRoomAllocations returns the GenericRoomAllocations field if non-nil, zero value otherwise.

### GetGenericRoomAllocationsOk

`func (o *SubAllocationType) GetGenericRoomAllocationsOk() (*SubAllocationTypeGenericRoomAllocations, bool)`

GetGenericRoomAllocationsOk returns a tuple with the GenericRoomAllocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenericRoomAllocations

`func (o *SubAllocationType) SetGenericRoomAllocations(v SubAllocationTypeGenericRoomAllocations)`

SetGenericRoomAllocations sets GenericRoomAllocations field to given value.

### HasGenericRoomAllocations

`func (o *SubAllocationType) HasGenericRoomAllocations() bool`

HasGenericRoomAllocations returns a boolean if a field has been set.

### GetAlternateDates

`func (o *SubAllocationType) GetAlternateDates() []BlockAlternateDateType`

GetAlternateDates returns the AlternateDates field if non-nil, zero value otherwise.

### GetAlternateDatesOk

`func (o *SubAllocationType) GetAlternateDatesOk() (*[]BlockAlternateDateType, bool)`

GetAlternateDatesOk returns a tuple with the AlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateDates

`func (o *SubAllocationType) SetAlternateDates(v []BlockAlternateDateType)`

SetAlternateDates sets AlternateDates field to given value.

### HasAlternateDates

`func (o *SubAllocationType) HasAlternateDates() bool`

HasAlternateDates returns a boolean if a field has been set.

### GetSellMessages

`func (o *SubAllocationType) GetSellMessages() SellMessageConfigsType`

GetSellMessages returns the SellMessages field if non-nil, zero value otherwise.

### GetSellMessagesOk

`func (o *SubAllocationType) GetSellMessagesOk() (*SellMessageConfigsType, bool)`

GetSellMessagesOk returns a tuple with the SellMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessages

`func (o *SubAllocationType) SetSellMessages(v SellMessageConfigsType)`

SetSellMessages sets SellMessages field to given value.

### HasSellMessages

`func (o *SubAllocationType) HasSellMessages() bool`

HasSellMessages returns a boolean if a field has been set.

### GetAttachments

`func (o *SubAllocationType) GetAttachments() []AttachmentType`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *SubAllocationType) GetAttachmentsOk() (*[]AttachmentType, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *SubAllocationType) SetAttachments(v []AttachmentType)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *SubAllocationType) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetWashSchedules

`func (o *SubAllocationType) GetWashSchedules() []BlockWashScheduleType`

GetWashSchedules returns the WashSchedules field if non-nil, zero value otherwise.

### GetWashSchedulesOk

`func (o *SubAllocationType) GetWashSchedulesOk() (*[]BlockWashScheduleType, bool)`

GetWashSchedulesOk returns a tuple with the WashSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashSchedules

`func (o *SubAllocationType) SetWashSchedules(v []BlockWashScheduleType)`

SetWashSchedules sets WashSchedules field to given value.

### HasWashSchedules

`func (o *SubAllocationType) HasWashSchedules() bool`

HasWashSchedules returns a boolean if a field has been set.

### GetRestrictions

`func (o *SubAllocationType) GetRestrictions() BlockRestrictionsType`

GetRestrictions returns the Restrictions field if non-nil, zero value otherwise.

### GetRestrictionsOk

`func (o *SubAllocationType) GetRestrictionsOk() (*BlockRestrictionsType, bool)`

GetRestrictionsOk returns a tuple with the Restrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictions

`func (o *SubAllocationType) SetRestrictions(v BlockRestrictionsType)`

SetRestrictions sets Restrictions field to given value.

### HasRestrictions

`func (o *SubAllocationType) HasRestrictions() bool`

HasRestrictions returns a boolean if a field has been set.

### GetAccessExclusions

`func (o *SubAllocationType) GetAccessExclusions() BlockAccessExclusionsType`

GetAccessExclusions returns the AccessExclusions field if non-nil, zero value otherwise.

### GetAccessExclusionsOk

`func (o *SubAllocationType) GetAccessExclusionsOk() (*BlockAccessExclusionsType, bool)`

GetAccessExclusionsOk returns a tuple with the AccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessExclusions

`func (o *SubAllocationType) SetAccessExclusions(v BlockAccessExclusionsType)`

SetAccessExclusions sets AccessExclusions field to given value.

### HasAccessExclusions

`func (o *SubAllocationType) HasAccessExclusions() bool`

HasAccessExclusions returns a boolean if a field has been set.

### GetHotelId

`func (o *SubAllocationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SubAllocationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SubAllocationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SubAllocationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *SubAllocationType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *SubAllocationType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *SubAllocationType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *SubAllocationType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *SubAllocationType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *SubAllocationType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *SubAllocationType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *SubAllocationType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *SubAllocationType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *SubAllocationType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *SubAllocationType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *SubAllocationType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *SubAllocationType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *SubAllocationType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *SubAllocationType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *SubAllocationType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *SubAllocationType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *SubAllocationType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *SubAllocationType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *SubAllocationType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *SubAllocationType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *SubAllocationType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *SubAllocationType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *SubAllocationType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetMasterAllocationInfo

`func (o *SubAllocationType) GetMasterAllocationInfo() MasterSubBlockBaseInfoType`

GetMasterAllocationInfo returns the MasterAllocationInfo field if non-nil, zero value otherwise.

### GetMasterAllocationInfoOk

`func (o *SubAllocationType) GetMasterAllocationInfoOk() (*MasterSubBlockBaseInfoType, bool)`

GetMasterAllocationInfoOk returns a tuple with the MasterAllocationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterAllocationInfo

`func (o *SubAllocationType) SetMasterAllocationInfo(v MasterSubBlockBaseInfoType)`

SetMasterAllocationInfo sets MasterAllocationInfo field to given value.

### HasMasterAllocationInfo

`func (o *SubAllocationType) HasMasterAllocationInfo() bool`

HasMasterAllocationInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


