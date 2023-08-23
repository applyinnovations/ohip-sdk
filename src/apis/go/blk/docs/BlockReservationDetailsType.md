# BlockReservationDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanCode** | Pointer to [**[]BlockRatePlanInfoType**](BlockRatePlanInfoType.md) | Rate Plan for the block. | [optional] 
**ArrivalTime** | Pointer to **time.Time** | Indicates the approximate check in time for the reservations made for the block. | [optional] 
**DepartureTime** | Pointer to **time.Time** | Indicates the approximate check out time for the reservations made for the block. | [optional] 
**TraceCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Breakfast** | Pointer to [**BreakfastType**](BreakfastType.md) |  | [optional] 
**Porterage** | Pointer to [**PorterageType**](PorterageType.md) |  | [optional] 
**TaRecordLocator** | Pointer to **string** | Free format field to store information from Wholesaler for the block. | [optional] 
**CutOffDate** | Pointer to **string** | Cut off date of the block. | [optional] 
**CutOffDays** | Pointer to **float32** | Cut off days of the block. | [optional] 
**UpdateGridOnCutoffChange** | Pointer to **bool** | Determines whether the CutOffDate or CutOffDays has changed for the block header. If CutOffDate or CutOffDays is changed then apply the changed cutoff date/ days as the new cutoff date/ days to all the room types in the Grid. | [optional] 
**FollowupDate** | Pointer to **string** | This element informs about the systematic follow up on this business block. A Group Reservations Agent or Reservations Manager can use this date to identify when to followup with the customer. | [optional] 
**DecisionDate** | Pointer to **string** | Contains information about the date by which the group must make a decision on the block. | [optional] 
**RoomingListDueDate** | Pointer to **string** | Due date for the rooming list for the block. This is the date by which the guest list should be provided by the customer. | [optional] 
**Elastic** | Pointer to **float32** | Elasticity of the block. | [optional] 
**SuppressRate** | Pointer to **bool** | Are Rate amounts suppressed for the block. | [optional] 
**PrintRate** | Pointer to **bool** | Determines if the rate amounts are to be printed on the reservations picked up from the block. This becomes the default Print Rate setting for all reservations picked up from the block. | [optional] 
**RateGuarantee** | Pointer to **bool** | If this is true, then when a reservation is picked up for the block, the rate for that reservation is taken from the rate grid belonging to the block. If this is false, the rate amounts on the room grid are updated every time the Refresh Rates process is applied. | [optional] 
**InventoryControl** | Pointer to [**BlockInventoryControlType**](BlockInventoryControlType.md) |  | [optional] 
**PersonsPerRoom** | Pointer to **float32** | Indicates the expected number of guests per sleeping room when Occupancy Split Per Room Type parameter is N. | [optional] 
**ActivePostingMasterReservations** | Pointer to **bool** | Whether any active posting master reservations exist for the business block. | [optional] 
**Housing** | Pointer to **bool** | Determines whether or not the block can be managed at the CRS level. | [optional] 
**GuaranteeRequired** | Pointer to **bool** | Determines whether the CRS guarantee is required or not for the block. | [optional] 
**ControlBlockLocally** | Pointer to **bool** | Determines whether or not the block can be managed at the CRS level. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction Code for the block | [optional] 

## Methods

### NewBlockReservationDetailsType

`func NewBlockReservationDetailsType() *BlockReservationDetailsType`

NewBlockReservationDetailsType instantiates a new BlockReservationDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockReservationDetailsTypeWithDefaults

`func NewBlockReservationDetailsTypeWithDefaults() *BlockReservationDetailsType`

NewBlockReservationDetailsTypeWithDefaults instantiates a new BlockReservationDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanCode

`func (o *BlockReservationDetailsType) GetRatePlanCode() []BlockRatePlanInfoType`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *BlockReservationDetailsType) GetRatePlanCodeOk() (*[]BlockRatePlanInfoType, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *BlockReservationDetailsType) SetRatePlanCode(v []BlockRatePlanInfoType)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *BlockReservationDetailsType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetArrivalTime

`func (o *BlockReservationDetailsType) GetArrivalTime() time.Time`

GetArrivalTime returns the ArrivalTime field if non-nil, zero value otherwise.

### GetArrivalTimeOk

`func (o *BlockReservationDetailsType) GetArrivalTimeOk() (*time.Time, bool)`

GetArrivalTimeOk returns a tuple with the ArrivalTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalTime

`func (o *BlockReservationDetailsType) SetArrivalTime(v time.Time)`

SetArrivalTime sets ArrivalTime field to given value.

### HasArrivalTime

`func (o *BlockReservationDetailsType) HasArrivalTime() bool`

HasArrivalTime returns a boolean if a field has been set.

### GetDepartureTime

`func (o *BlockReservationDetailsType) GetDepartureTime() time.Time`

GetDepartureTime returns the DepartureTime field if non-nil, zero value otherwise.

### GetDepartureTimeOk

`func (o *BlockReservationDetailsType) GetDepartureTimeOk() (*time.Time, bool)`

GetDepartureTimeOk returns a tuple with the DepartureTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureTime

`func (o *BlockReservationDetailsType) SetDepartureTime(v time.Time)`

SetDepartureTime sets DepartureTime field to given value.

### HasDepartureTime

`func (o *BlockReservationDetailsType) HasDepartureTime() bool`

HasDepartureTime returns a boolean if a field has been set.

### GetTraceCode

`func (o *BlockReservationDetailsType) GetTraceCode() CodeDescriptionType`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *BlockReservationDetailsType) GetTraceCodeOk() (*CodeDescriptionType, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *BlockReservationDetailsType) SetTraceCode(v CodeDescriptionType)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *BlockReservationDetailsType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetBreakfast

`func (o *BlockReservationDetailsType) GetBreakfast() BreakfastType`

GetBreakfast returns the Breakfast field if non-nil, zero value otherwise.

### GetBreakfastOk

`func (o *BlockReservationDetailsType) GetBreakfastOk() (*BreakfastType, bool)`

GetBreakfastOk returns a tuple with the Breakfast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBreakfast

`func (o *BlockReservationDetailsType) SetBreakfast(v BreakfastType)`

SetBreakfast sets Breakfast field to given value.

### HasBreakfast

`func (o *BlockReservationDetailsType) HasBreakfast() bool`

HasBreakfast returns a boolean if a field has been set.

### GetPorterage

`func (o *BlockReservationDetailsType) GetPorterage() PorterageType`

GetPorterage returns the Porterage field if non-nil, zero value otherwise.

### GetPorterageOk

`func (o *BlockReservationDetailsType) GetPorterageOk() (*PorterageType, bool)`

GetPorterageOk returns a tuple with the Porterage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPorterage

`func (o *BlockReservationDetailsType) SetPorterage(v PorterageType)`

SetPorterage sets Porterage field to given value.

### HasPorterage

`func (o *BlockReservationDetailsType) HasPorterage() bool`

HasPorterage returns a boolean if a field has been set.

### GetTaRecordLocator

`func (o *BlockReservationDetailsType) GetTaRecordLocator() string`

GetTaRecordLocator returns the TaRecordLocator field if non-nil, zero value otherwise.

### GetTaRecordLocatorOk

`func (o *BlockReservationDetailsType) GetTaRecordLocatorOk() (*string, bool)`

GetTaRecordLocatorOk returns a tuple with the TaRecordLocator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaRecordLocator

`func (o *BlockReservationDetailsType) SetTaRecordLocator(v string)`

SetTaRecordLocator sets TaRecordLocator field to given value.

### HasTaRecordLocator

`func (o *BlockReservationDetailsType) HasTaRecordLocator() bool`

HasTaRecordLocator returns a boolean if a field has been set.

### GetCutOffDate

`func (o *BlockReservationDetailsType) GetCutOffDate() string`

GetCutOffDate returns the CutOffDate field if non-nil, zero value otherwise.

### GetCutOffDateOk

`func (o *BlockReservationDetailsType) GetCutOffDateOk() (*string, bool)`

GetCutOffDateOk returns a tuple with the CutOffDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutOffDate

`func (o *BlockReservationDetailsType) SetCutOffDate(v string)`

SetCutOffDate sets CutOffDate field to given value.

### HasCutOffDate

`func (o *BlockReservationDetailsType) HasCutOffDate() bool`

HasCutOffDate returns a boolean if a field has been set.

### GetCutOffDays

`func (o *BlockReservationDetailsType) GetCutOffDays() float32`

GetCutOffDays returns the CutOffDays field if non-nil, zero value otherwise.

### GetCutOffDaysOk

`func (o *BlockReservationDetailsType) GetCutOffDaysOk() (*float32, bool)`

GetCutOffDaysOk returns a tuple with the CutOffDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutOffDays

`func (o *BlockReservationDetailsType) SetCutOffDays(v float32)`

SetCutOffDays sets CutOffDays field to given value.

### HasCutOffDays

`func (o *BlockReservationDetailsType) HasCutOffDays() bool`

HasCutOffDays returns a boolean if a field has been set.

### GetUpdateGridOnCutoffChange

`func (o *BlockReservationDetailsType) GetUpdateGridOnCutoffChange() bool`

GetUpdateGridOnCutoffChange returns the UpdateGridOnCutoffChange field if non-nil, zero value otherwise.

### GetUpdateGridOnCutoffChangeOk

`func (o *BlockReservationDetailsType) GetUpdateGridOnCutoffChangeOk() (*bool, bool)`

GetUpdateGridOnCutoffChangeOk returns a tuple with the UpdateGridOnCutoffChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateGridOnCutoffChange

`func (o *BlockReservationDetailsType) SetUpdateGridOnCutoffChange(v bool)`

SetUpdateGridOnCutoffChange sets UpdateGridOnCutoffChange field to given value.

### HasUpdateGridOnCutoffChange

`func (o *BlockReservationDetailsType) HasUpdateGridOnCutoffChange() bool`

HasUpdateGridOnCutoffChange returns a boolean if a field has been set.

### GetFollowupDate

`func (o *BlockReservationDetailsType) GetFollowupDate() string`

GetFollowupDate returns the FollowupDate field if non-nil, zero value otherwise.

### GetFollowupDateOk

`func (o *BlockReservationDetailsType) GetFollowupDateOk() (*string, bool)`

GetFollowupDateOk returns a tuple with the FollowupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowupDate

`func (o *BlockReservationDetailsType) SetFollowupDate(v string)`

SetFollowupDate sets FollowupDate field to given value.

### HasFollowupDate

`func (o *BlockReservationDetailsType) HasFollowupDate() bool`

HasFollowupDate returns a boolean if a field has been set.

### GetDecisionDate

`func (o *BlockReservationDetailsType) GetDecisionDate() string`

GetDecisionDate returns the DecisionDate field if non-nil, zero value otherwise.

### GetDecisionDateOk

`func (o *BlockReservationDetailsType) GetDecisionDateOk() (*string, bool)`

GetDecisionDateOk returns a tuple with the DecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionDate

`func (o *BlockReservationDetailsType) SetDecisionDate(v string)`

SetDecisionDate sets DecisionDate field to given value.

### HasDecisionDate

`func (o *BlockReservationDetailsType) HasDecisionDate() bool`

HasDecisionDate returns a boolean if a field has been set.

### GetRoomingListDueDate

`func (o *BlockReservationDetailsType) GetRoomingListDueDate() string`

GetRoomingListDueDate returns the RoomingListDueDate field if non-nil, zero value otherwise.

### GetRoomingListDueDateOk

`func (o *BlockReservationDetailsType) GetRoomingListDueDateOk() (*string, bool)`

GetRoomingListDueDateOk returns a tuple with the RoomingListDueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomingListDueDate

`func (o *BlockReservationDetailsType) SetRoomingListDueDate(v string)`

SetRoomingListDueDate sets RoomingListDueDate field to given value.

### HasRoomingListDueDate

`func (o *BlockReservationDetailsType) HasRoomingListDueDate() bool`

HasRoomingListDueDate returns a boolean if a field has been set.

### GetElastic

`func (o *BlockReservationDetailsType) GetElastic() float32`

GetElastic returns the Elastic field if non-nil, zero value otherwise.

### GetElasticOk

`func (o *BlockReservationDetailsType) GetElasticOk() (*float32, bool)`

GetElasticOk returns a tuple with the Elastic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElastic

`func (o *BlockReservationDetailsType) SetElastic(v float32)`

SetElastic sets Elastic field to given value.

### HasElastic

`func (o *BlockReservationDetailsType) HasElastic() bool`

HasElastic returns a boolean if a field has been set.

### GetSuppressRate

`func (o *BlockReservationDetailsType) GetSuppressRate() bool`

GetSuppressRate returns the SuppressRate field if non-nil, zero value otherwise.

### GetSuppressRateOk

`func (o *BlockReservationDetailsType) GetSuppressRateOk() (*bool, bool)`

GetSuppressRateOk returns a tuple with the SuppressRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuppressRate

`func (o *BlockReservationDetailsType) SetSuppressRate(v bool)`

SetSuppressRate sets SuppressRate field to given value.

### HasSuppressRate

`func (o *BlockReservationDetailsType) HasSuppressRate() bool`

HasSuppressRate returns a boolean if a field has been set.

### GetPrintRate

`func (o *BlockReservationDetailsType) GetPrintRate() bool`

GetPrintRate returns the PrintRate field if non-nil, zero value otherwise.

### GetPrintRateOk

`func (o *BlockReservationDetailsType) GetPrintRateOk() (*bool, bool)`

GetPrintRateOk returns a tuple with the PrintRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintRate

`func (o *BlockReservationDetailsType) SetPrintRate(v bool)`

SetPrintRate sets PrintRate field to given value.

### HasPrintRate

`func (o *BlockReservationDetailsType) HasPrintRate() bool`

HasPrintRate returns a boolean if a field has been set.

### GetRateGuarantee

`func (o *BlockReservationDetailsType) GetRateGuarantee() bool`

GetRateGuarantee returns the RateGuarantee field if non-nil, zero value otherwise.

### GetRateGuaranteeOk

`func (o *BlockReservationDetailsType) GetRateGuaranteeOk() (*bool, bool)`

GetRateGuaranteeOk returns a tuple with the RateGuarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateGuarantee

`func (o *BlockReservationDetailsType) SetRateGuarantee(v bool)`

SetRateGuarantee sets RateGuarantee field to given value.

### HasRateGuarantee

`func (o *BlockReservationDetailsType) HasRateGuarantee() bool`

HasRateGuarantee returns a boolean if a field has been set.

### GetInventoryControl

`func (o *BlockReservationDetailsType) GetInventoryControl() BlockInventoryControlType`

GetInventoryControl returns the InventoryControl field if non-nil, zero value otherwise.

### GetInventoryControlOk

`func (o *BlockReservationDetailsType) GetInventoryControlOk() (*BlockInventoryControlType, bool)`

GetInventoryControlOk returns a tuple with the InventoryControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryControl

`func (o *BlockReservationDetailsType) SetInventoryControl(v BlockInventoryControlType)`

SetInventoryControl sets InventoryControl field to given value.

### HasInventoryControl

`func (o *BlockReservationDetailsType) HasInventoryControl() bool`

HasInventoryControl returns a boolean if a field has been set.

### GetPersonsPerRoom

`func (o *BlockReservationDetailsType) GetPersonsPerRoom() float32`

GetPersonsPerRoom returns the PersonsPerRoom field if non-nil, zero value otherwise.

### GetPersonsPerRoomOk

`func (o *BlockReservationDetailsType) GetPersonsPerRoomOk() (*float32, bool)`

GetPersonsPerRoomOk returns a tuple with the PersonsPerRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonsPerRoom

`func (o *BlockReservationDetailsType) SetPersonsPerRoom(v float32)`

SetPersonsPerRoom sets PersonsPerRoom field to given value.

### HasPersonsPerRoom

`func (o *BlockReservationDetailsType) HasPersonsPerRoom() bool`

HasPersonsPerRoom returns a boolean if a field has been set.

### GetActivePostingMasterReservations

`func (o *BlockReservationDetailsType) GetActivePostingMasterReservations() bool`

GetActivePostingMasterReservations returns the ActivePostingMasterReservations field if non-nil, zero value otherwise.

### GetActivePostingMasterReservationsOk

`func (o *BlockReservationDetailsType) GetActivePostingMasterReservationsOk() (*bool, bool)`

GetActivePostingMasterReservationsOk returns a tuple with the ActivePostingMasterReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivePostingMasterReservations

`func (o *BlockReservationDetailsType) SetActivePostingMasterReservations(v bool)`

SetActivePostingMasterReservations sets ActivePostingMasterReservations field to given value.

### HasActivePostingMasterReservations

`func (o *BlockReservationDetailsType) HasActivePostingMasterReservations() bool`

HasActivePostingMasterReservations returns a boolean if a field has been set.

### GetHousing

`func (o *BlockReservationDetailsType) GetHousing() bool`

GetHousing returns the Housing field if non-nil, zero value otherwise.

### GetHousingOk

`func (o *BlockReservationDetailsType) GetHousingOk() (*bool, bool)`

GetHousingOk returns a tuple with the Housing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousing

`func (o *BlockReservationDetailsType) SetHousing(v bool)`

SetHousing sets Housing field to given value.

### HasHousing

`func (o *BlockReservationDetailsType) HasHousing() bool`

HasHousing returns a boolean if a field has been set.

### GetGuaranteeRequired

`func (o *BlockReservationDetailsType) GetGuaranteeRequired() bool`

GetGuaranteeRequired returns the GuaranteeRequired field if non-nil, zero value otherwise.

### GetGuaranteeRequiredOk

`func (o *BlockReservationDetailsType) GetGuaranteeRequiredOk() (*bool, bool)`

GetGuaranteeRequiredOk returns a tuple with the GuaranteeRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeRequired

`func (o *BlockReservationDetailsType) SetGuaranteeRequired(v bool)`

SetGuaranteeRequired sets GuaranteeRequired field to given value.

### HasGuaranteeRequired

`func (o *BlockReservationDetailsType) HasGuaranteeRequired() bool`

HasGuaranteeRequired returns a boolean if a field has been set.

### GetControlBlockLocally

`func (o *BlockReservationDetailsType) GetControlBlockLocally() bool`

GetControlBlockLocally returns the ControlBlockLocally field if non-nil, zero value otherwise.

### GetControlBlockLocallyOk

`func (o *BlockReservationDetailsType) GetControlBlockLocallyOk() (*bool, bool)`

GetControlBlockLocallyOk returns a tuple with the ControlBlockLocally field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlBlockLocally

`func (o *BlockReservationDetailsType) SetControlBlockLocally(v bool)`

SetControlBlockLocally sets ControlBlockLocally field to given value.

### HasControlBlockLocally

`func (o *BlockReservationDetailsType) HasControlBlockLocally() bool`

HasControlBlockLocally returns a boolean if a field has been set.

### GetTransactionCode

`func (o *BlockReservationDetailsType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *BlockReservationDetailsType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *BlockReservationDetailsType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *BlockReservationDetailsType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


