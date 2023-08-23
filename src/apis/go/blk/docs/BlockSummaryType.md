# BlockSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code for this block. | [optional] 
**BlockCode** | Pointer to **string** | Block code for this block. | [optional] 
**BlockName** | Pointer to **string** | Block name for this block. | [optional] 
**BlockStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**Status** | Pointer to **string** | Internal status for the block. | [optional] 
**RateCode** | Pointer to **string** | Rate code assigned to block. | [optional] 
**CateringStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**CateringAttendees** | Pointer to **int32** | Number of Attendees for Catering Event | [optional] 
**CateringOnlyBlock** | Pointer to **bool** | Indicates if this is a catering only block. | [optional] 
**StartDate** | Pointer to **string** | Start date for this block. | [optional] 
**EndDate** | Pointer to **string** | End date for this block. | [optional] 
**ShoulderStartDate** | Pointer to **string** | Shoulder begin date for this block. | [optional] 
**ShoulderEndDate** | Pointer to **string** | Shoulder end date for this block. | [optional] 
**InventoryControl** | Pointer to [**BlockInventoryControlType**](BlockInventoryControlType.md) |  | [optional] 
**HotelUse** | Pointer to [**HotelUseType**](HotelUseType.md) |  | [optional] 
**SearchMatches** | Pointer to [**[]SearchMatchType**](SearchMatchType.md) | List of Generic Name-Value-Pair Parameters used for super search matches. | [optional] 
**BlockIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**TourCode** | Pointer to **string** | The tour code that this block belongs to, if the block is a part of a tour series. | [optional] 
**Rooms** | Pointer to **int32** | Inventory held for the business block. | [optional] 
**PrimaryOwners** | Pointer to [**BlockOwnersType**](BlockOwnersType.md) |  | [optional] 
**BlockClassification** | Pointer to [**BlockClassificationType**](BlockClassificationType.md) |  | [optional] 
**Synchronized** | Pointer to **bool** | Indicate if Master/Sub Blocks are Synchronized. | [optional] 
**GroupName** | Pointer to **string** | Group name for this block. | [optional] 
**TentativeBlock** | Pointer to **bool** | If tentative block, block inventory is not deducted from hotel inventory else block inventory is deducted. | [optional] 
**CustomFields** | Pointer to [**CustomFieldsType**](CustomFieldsType.md) |  | [optional] 
**ActualRooms** | Pointer to **int32** | Inventory held for the block&#39;s reservations. | [optional] 
**CutoffDate** | Pointer to **string** | Date after which unused block rooms should be returned to house. | [optional] 
**ReservationType** | Pointer to **string** | Reservation type of the business block. | [optional] 
**FlexibleDates** | Pointer to **bool** | Indicates if alternate dates are allowed for the booking. | [optional] 
**DeductInventory** | Pointer to **bool** | Indicates if blocked rooms are deducted from inventory. | [optional] 
**CateringDeductInventory** | Pointer to **bool** | Indicates if blocked catering events are deducted from inventory. | [optional] 
**DecisionDate** | Pointer to **string** | Contains information about the date by which the group must make a decision on the block. | [optional] 
**FollowupDate** | Pointer to **string** | Contains information to follow up on the block. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 

## Methods

### NewBlockSummaryType

`func NewBlockSummaryType() *BlockSummaryType`

NewBlockSummaryType instantiates a new BlockSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSummaryTypeWithDefaults

`func NewBlockSummaryTypeWithDefaults() *BlockSummaryType`

NewBlockSummaryTypeWithDefaults instantiates a new BlockSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockCode

`func (o *BlockSummaryType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockSummaryType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockSummaryType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockSummaryType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockName

`func (o *BlockSummaryType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *BlockSummaryType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *BlockSummaryType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *BlockSummaryType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockStatus

`func (o *BlockSummaryType) GetBlockStatus() BookingStatusType`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *BlockSummaryType) GetBlockStatusOk() (*BookingStatusType, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *BlockSummaryType) SetBlockStatus(v BookingStatusType)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *BlockSummaryType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetStatus

`func (o *BlockSummaryType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BlockSummaryType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BlockSummaryType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BlockSummaryType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRateCode

`func (o *BlockSummaryType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *BlockSummaryType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *BlockSummaryType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *BlockSummaryType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetCateringStatus

`func (o *BlockSummaryType) GetCateringStatus() BookingStatusType`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *BlockSummaryType) GetCateringStatusOk() (*BookingStatusType, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *BlockSummaryType) SetCateringStatus(v BookingStatusType)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *BlockSummaryType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetCateringAttendees

`func (o *BlockSummaryType) GetCateringAttendees() int32`

GetCateringAttendees returns the CateringAttendees field if non-nil, zero value otherwise.

### GetCateringAttendeesOk

`func (o *BlockSummaryType) GetCateringAttendeesOk() (*int32, bool)`

GetCateringAttendeesOk returns a tuple with the CateringAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringAttendees

`func (o *BlockSummaryType) SetCateringAttendees(v int32)`

SetCateringAttendees sets CateringAttendees field to given value.

### HasCateringAttendees

`func (o *BlockSummaryType) HasCateringAttendees() bool`

HasCateringAttendees returns a boolean if a field has been set.

### GetCateringOnlyBlock

`func (o *BlockSummaryType) GetCateringOnlyBlock() bool`

GetCateringOnlyBlock returns the CateringOnlyBlock field if non-nil, zero value otherwise.

### GetCateringOnlyBlockOk

`func (o *BlockSummaryType) GetCateringOnlyBlockOk() (*bool, bool)`

GetCateringOnlyBlockOk returns a tuple with the CateringOnlyBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOnlyBlock

`func (o *BlockSummaryType) SetCateringOnlyBlock(v bool)`

SetCateringOnlyBlock sets CateringOnlyBlock field to given value.

### HasCateringOnlyBlock

`func (o *BlockSummaryType) HasCateringOnlyBlock() bool`

HasCateringOnlyBlock returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockSummaryType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockSummaryType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockSummaryType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockSummaryType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockSummaryType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockSummaryType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockSummaryType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockSummaryType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetShoulderStartDate

`func (o *BlockSummaryType) GetShoulderStartDate() string`

GetShoulderStartDate returns the ShoulderStartDate field if non-nil, zero value otherwise.

### GetShoulderStartDateOk

`func (o *BlockSummaryType) GetShoulderStartDateOk() (*string, bool)`

GetShoulderStartDateOk returns a tuple with the ShoulderStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderStartDate

`func (o *BlockSummaryType) SetShoulderStartDate(v string)`

SetShoulderStartDate sets ShoulderStartDate field to given value.

### HasShoulderStartDate

`func (o *BlockSummaryType) HasShoulderStartDate() bool`

HasShoulderStartDate returns a boolean if a field has been set.

### GetShoulderEndDate

`func (o *BlockSummaryType) GetShoulderEndDate() string`

GetShoulderEndDate returns the ShoulderEndDate field if non-nil, zero value otherwise.

### GetShoulderEndDateOk

`func (o *BlockSummaryType) GetShoulderEndDateOk() (*string, bool)`

GetShoulderEndDateOk returns a tuple with the ShoulderEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderEndDate

`func (o *BlockSummaryType) SetShoulderEndDate(v string)`

SetShoulderEndDate sets ShoulderEndDate field to given value.

### HasShoulderEndDate

`func (o *BlockSummaryType) HasShoulderEndDate() bool`

HasShoulderEndDate returns a boolean if a field has been set.

### GetInventoryControl

`func (o *BlockSummaryType) GetInventoryControl() BlockInventoryControlType`

GetInventoryControl returns the InventoryControl field if non-nil, zero value otherwise.

### GetInventoryControlOk

`func (o *BlockSummaryType) GetInventoryControlOk() (*BlockInventoryControlType, bool)`

GetInventoryControlOk returns a tuple with the InventoryControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryControl

`func (o *BlockSummaryType) SetInventoryControl(v BlockInventoryControlType)`

SetInventoryControl sets InventoryControl field to given value.

### HasInventoryControl

`func (o *BlockSummaryType) HasInventoryControl() bool`

HasInventoryControl returns a boolean if a field has been set.

### GetHotelUse

`func (o *BlockSummaryType) GetHotelUse() HotelUseType`

GetHotelUse returns the HotelUse field if non-nil, zero value otherwise.

### GetHotelUseOk

`func (o *BlockSummaryType) GetHotelUseOk() (*HotelUseType, bool)`

GetHotelUseOk returns a tuple with the HotelUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelUse

`func (o *BlockSummaryType) SetHotelUse(v HotelUseType)`

SetHotelUse sets HotelUse field to given value.

### HasHotelUse

`func (o *BlockSummaryType) HasHotelUse() bool`

HasHotelUse returns a boolean if a field has been set.

### GetSearchMatches

`func (o *BlockSummaryType) GetSearchMatches() []SearchMatchType`

GetSearchMatches returns the SearchMatches field if non-nil, zero value otherwise.

### GetSearchMatchesOk

`func (o *BlockSummaryType) GetSearchMatchesOk() (*[]SearchMatchType, bool)`

GetSearchMatchesOk returns a tuple with the SearchMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchMatches

`func (o *BlockSummaryType) SetSearchMatches(v []SearchMatchType)`

SetSearchMatches sets SearchMatches field to given value.

### HasSearchMatches

`func (o *BlockSummaryType) HasSearchMatches() bool`

HasSearchMatches returns a boolean if a field has been set.

### GetBlockIndicators

`func (o *BlockSummaryType) GetBlockIndicators() []IndicatorType`

GetBlockIndicators returns the BlockIndicators field if non-nil, zero value otherwise.

### GetBlockIndicatorsOk

`func (o *BlockSummaryType) GetBlockIndicatorsOk() (*[]IndicatorType, bool)`

GetBlockIndicatorsOk returns a tuple with the BlockIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIndicators

`func (o *BlockSummaryType) SetBlockIndicators(v []IndicatorType)`

SetBlockIndicators sets BlockIndicators field to given value.

### HasBlockIndicators

`func (o *BlockSummaryType) HasBlockIndicators() bool`

HasBlockIndicators returns a boolean if a field has been set.

### GetTourCode

`func (o *BlockSummaryType) GetTourCode() string`

GetTourCode returns the TourCode field if non-nil, zero value otherwise.

### GetTourCodeOk

`func (o *BlockSummaryType) GetTourCodeOk() (*string, bool)`

GetTourCodeOk returns a tuple with the TourCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTourCode

`func (o *BlockSummaryType) SetTourCode(v string)`

SetTourCode sets TourCode field to given value.

### HasTourCode

`func (o *BlockSummaryType) HasTourCode() bool`

HasTourCode returns a boolean if a field has been set.

### GetRooms

`func (o *BlockSummaryType) GetRooms() int32`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *BlockSummaryType) GetRoomsOk() (*int32, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *BlockSummaryType) SetRooms(v int32)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *BlockSummaryType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetPrimaryOwners

`func (o *BlockSummaryType) GetPrimaryOwners() BlockOwnersType`

GetPrimaryOwners returns the PrimaryOwners field if non-nil, zero value otherwise.

### GetPrimaryOwnersOk

`func (o *BlockSummaryType) GetPrimaryOwnersOk() (*BlockOwnersType, bool)`

GetPrimaryOwnersOk returns a tuple with the PrimaryOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryOwners

`func (o *BlockSummaryType) SetPrimaryOwners(v BlockOwnersType)`

SetPrimaryOwners sets PrimaryOwners field to given value.

### HasPrimaryOwners

`func (o *BlockSummaryType) HasPrimaryOwners() bool`

HasPrimaryOwners returns a boolean if a field has been set.

### GetBlockClassification

`func (o *BlockSummaryType) GetBlockClassification() BlockClassificationType`

GetBlockClassification returns the BlockClassification field if non-nil, zero value otherwise.

### GetBlockClassificationOk

`func (o *BlockSummaryType) GetBlockClassificationOk() (*BlockClassificationType, bool)`

GetBlockClassificationOk returns a tuple with the BlockClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockClassification

`func (o *BlockSummaryType) SetBlockClassification(v BlockClassificationType)`

SetBlockClassification sets BlockClassification field to given value.

### HasBlockClassification

`func (o *BlockSummaryType) HasBlockClassification() bool`

HasBlockClassification returns a boolean if a field has been set.

### GetSynchronized

`func (o *BlockSummaryType) GetSynchronized() bool`

GetSynchronized returns the Synchronized field if non-nil, zero value otherwise.

### GetSynchronizedOk

`func (o *BlockSummaryType) GetSynchronizedOk() (*bool, bool)`

GetSynchronizedOk returns a tuple with the Synchronized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynchronized

`func (o *BlockSummaryType) SetSynchronized(v bool)`

SetSynchronized sets Synchronized field to given value.

### HasSynchronized

`func (o *BlockSummaryType) HasSynchronized() bool`

HasSynchronized returns a boolean if a field has been set.

### GetGroupName

`func (o *BlockSummaryType) GetGroupName() string`

GetGroupName returns the GroupName field if non-nil, zero value otherwise.

### GetGroupNameOk

`func (o *BlockSummaryType) GetGroupNameOk() (*string, bool)`

GetGroupNameOk returns a tuple with the GroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupName

`func (o *BlockSummaryType) SetGroupName(v string)`

SetGroupName sets GroupName field to given value.

### HasGroupName

`func (o *BlockSummaryType) HasGroupName() bool`

HasGroupName returns a boolean if a field has been set.

### GetTentativeBlock

`func (o *BlockSummaryType) GetTentativeBlock() bool`

GetTentativeBlock returns the TentativeBlock field if non-nil, zero value otherwise.

### GetTentativeBlockOk

`func (o *BlockSummaryType) GetTentativeBlockOk() (*bool, bool)`

GetTentativeBlockOk returns a tuple with the TentativeBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTentativeBlock

`func (o *BlockSummaryType) SetTentativeBlock(v bool)`

SetTentativeBlock sets TentativeBlock field to given value.

### HasTentativeBlock

`func (o *BlockSummaryType) HasTentativeBlock() bool`

HasTentativeBlock returns a boolean if a field has been set.

### GetCustomFields

`func (o *BlockSummaryType) GetCustomFields() CustomFieldsType`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *BlockSummaryType) GetCustomFieldsOk() (*CustomFieldsType, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *BlockSummaryType) SetCustomFields(v CustomFieldsType)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *BlockSummaryType) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetActualRooms

`func (o *BlockSummaryType) GetActualRooms() int32`

GetActualRooms returns the ActualRooms field if non-nil, zero value otherwise.

### GetActualRoomsOk

`func (o *BlockSummaryType) GetActualRoomsOk() (*int32, bool)`

GetActualRoomsOk returns a tuple with the ActualRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualRooms

`func (o *BlockSummaryType) SetActualRooms(v int32)`

SetActualRooms sets ActualRooms field to given value.

### HasActualRooms

`func (o *BlockSummaryType) HasActualRooms() bool`

HasActualRooms returns a boolean if a field has been set.

### GetCutoffDate

`func (o *BlockSummaryType) GetCutoffDate() string`

GetCutoffDate returns the CutoffDate field if non-nil, zero value otherwise.

### GetCutoffDateOk

`func (o *BlockSummaryType) GetCutoffDateOk() (*string, bool)`

GetCutoffDateOk returns a tuple with the CutoffDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDate

`func (o *BlockSummaryType) SetCutoffDate(v string)`

SetCutoffDate sets CutoffDate field to given value.

### HasCutoffDate

`func (o *BlockSummaryType) HasCutoffDate() bool`

HasCutoffDate returns a boolean if a field has been set.

### GetReservationType

`func (o *BlockSummaryType) GetReservationType() string`

GetReservationType returns the ReservationType field if non-nil, zero value otherwise.

### GetReservationTypeOk

`func (o *BlockSummaryType) GetReservationTypeOk() (*string, bool)`

GetReservationTypeOk returns a tuple with the ReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationType

`func (o *BlockSummaryType) SetReservationType(v string)`

SetReservationType sets ReservationType field to given value.

### HasReservationType

`func (o *BlockSummaryType) HasReservationType() bool`

HasReservationType returns a boolean if a field has been set.

### GetFlexibleDates

`func (o *BlockSummaryType) GetFlexibleDates() bool`

GetFlexibleDates returns the FlexibleDates field if non-nil, zero value otherwise.

### GetFlexibleDatesOk

`func (o *BlockSummaryType) GetFlexibleDatesOk() (*bool, bool)`

GetFlexibleDatesOk returns a tuple with the FlexibleDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexibleDates

`func (o *BlockSummaryType) SetFlexibleDates(v bool)`

SetFlexibleDates sets FlexibleDates field to given value.

### HasFlexibleDates

`func (o *BlockSummaryType) HasFlexibleDates() bool`

HasFlexibleDates returns a boolean if a field has been set.

### GetDeductInventory

`func (o *BlockSummaryType) GetDeductInventory() bool`

GetDeductInventory returns the DeductInventory field if non-nil, zero value otherwise.

### GetDeductInventoryOk

`func (o *BlockSummaryType) GetDeductInventoryOk() (*bool, bool)`

GetDeductInventoryOk returns a tuple with the DeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeductInventory

`func (o *BlockSummaryType) SetDeductInventory(v bool)`

SetDeductInventory sets DeductInventory field to given value.

### HasDeductInventory

`func (o *BlockSummaryType) HasDeductInventory() bool`

HasDeductInventory returns a boolean if a field has been set.

### GetCateringDeductInventory

`func (o *BlockSummaryType) GetCateringDeductInventory() bool`

GetCateringDeductInventory returns the CateringDeductInventory field if non-nil, zero value otherwise.

### GetCateringDeductInventoryOk

`func (o *BlockSummaryType) GetCateringDeductInventoryOk() (*bool, bool)`

GetCateringDeductInventoryOk returns a tuple with the CateringDeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringDeductInventory

`func (o *BlockSummaryType) SetCateringDeductInventory(v bool)`

SetCateringDeductInventory sets CateringDeductInventory field to given value.

### HasCateringDeductInventory

`func (o *BlockSummaryType) HasCateringDeductInventory() bool`

HasCateringDeductInventory returns a boolean if a field has been set.

### GetDecisionDate

`func (o *BlockSummaryType) GetDecisionDate() string`

GetDecisionDate returns the DecisionDate field if non-nil, zero value otherwise.

### GetDecisionDateOk

`func (o *BlockSummaryType) GetDecisionDateOk() (*string, bool)`

GetDecisionDateOk returns a tuple with the DecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionDate

`func (o *BlockSummaryType) SetDecisionDate(v string)`

SetDecisionDate sets DecisionDate field to given value.

### HasDecisionDate

`func (o *BlockSummaryType) HasDecisionDate() bool`

HasDecisionDate returns a boolean if a field has been set.

### GetFollowupDate

`func (o *BlockSummaryType) GetFollowupDate() string`

GetFollowupDate returns the FollowupDate field if non-nil, zero value otherwise.

### GetFollowupDateOk

`func (o *BlockSummaryType) GetFollowupDateOk() (*string, bool)`

GetFollowupDateOk returns a tuple with the FollowupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowupDate

`func (o *BlockSummaryType) SetFollowupDate(v string)`

SetFollowupDate sets FollowupDate field to given value.

### HasFollowupDate

`func (o *BlockSummaryType) HasFollowupDate() bool`

HasFollowupDate returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *BlockSummaryType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *BlockSummaryType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *BlockSummaryType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *BlockSummaryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *BlockSummaryType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *BlockSummaryType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *BlockSummaryType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *BlockSummaryType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *BlockSummaryType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *BlockSummaryType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *BlockSummaryType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *BlockSummaryType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *BlockSummaryType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *BlockSummaryType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *BlockSummaryType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *BlockSummaryType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


