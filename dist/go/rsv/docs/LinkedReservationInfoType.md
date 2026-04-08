# LinkedReservationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**GivenName** | Pointer to **string** |  | [optional] 
**Surname** | Pointer to **string** |  | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**Room** | Pointer to **string** |  | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**Rate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ReservationBlock** | Pointer to [**ReservationBlockType**](ReservationBlockType.md) |  | [optional] 
**DisplayColor** | Pointer to **string** |  | [optional] 
**AllowedActions** | Pointer to [**[]ReservationAllowedActionType**](ReservationAllowedActionType.md) | Allowed action. | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**LinkReservationType** | Pointer to [**LinkedReservationType**](LinkedReservationType.md) |  | [optional] 
**ReverseCheckInAllowed** | Pointer to **bool** | This attribute is to verify if reverse check-in is allowed for the reservation. | [optional] 
**RoomNumberLocked** | Pointer to **bool** | This attribute is to verify if room number is locked for the reservation. When true the room number cannot be changed | [optional] 
**SuppressRate** | Pointer to **bool** | This attribute checks if rate is suppressed or not in order to properly show strike through. | [optional] 
**AdultCount** | Pointer to **int32** | Number of adults of the reservation. | [optional] 
**ChildCount** | Pointer to **int32** | Number of children of the reservation. | [optional] 
**BackToBack** | Pointer to **bool** | This attribute indicates if the linked reservation is marked as Back to Back or not. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**BackToBackSequence** | Pointer to [**BackToBackResSequenceType**](BackToBackResSequenceType.md) |  | [optional] 
**Shared** | Pointer to **bool** | This attribute indicates if the linked reservation is a shared reservation or not. | [optional] 
**BackToBackGroupId** | Pointer to **string** | This attribute represents a common identifier for a subgroup of linked reservations marked as Back to Back in a group of linked reservations. | [optional] 

## Methods

### NewLinkedReservationInfoType

`func NewLinkedReservationInfoType() *LinkedReservationInfoType`

NewLinkedReservationInfoType instantiates a new LinkedReservationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedReservationInfoTypeWithDefaults

`func NewLinkedReservationInfoTypeWithDefaults() *LinkedReservationInfoType`

NewLinkedReservationInfoTypeWithDefaults instantiates a new LinkedReservationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *LinkedReservationInfoType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *LinkedReservationInfoType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *LinkedReservationInfoType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *LinkedReservationInfoType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetTimeSpan

`func (o *LinkedReservationInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *LinkedReservationInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *LinkedReservationInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *LinkedReservationInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetGivenName

`func (o *LinkedReservationInfoType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *LinkedReservationInfoType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *LinkedReservationInfoType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *LinkedReservationInfoType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetSurname

`func (o *LinkedReservationInfoType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *LinkedReservationInfoType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *LinkedReservationInfoType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *LinkedReservationInfoType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### GetTitle

`func (o *LinkedReservationInfoType) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *LinkedReservationInfoType) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *LinkedReservationInfoType) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *LinkedReservationInfoType) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetRoomType

`func (o *LinkedReservationInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *LinkedReservationInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *LinkedReservationInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *LinkedReservationInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoom

`func (o *LinkedReservationInfoType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *LinkedReservationInfoType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *LinkedReservationInfoType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *LinkedReservationInfoType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *LinkedReservationInfoType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *LinkedReservationInfoType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *LinkedReservationInfoType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *LinkedReservationInfoType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRate

`func (o *LinkedReservationInfoType) GetRate() CurrencyAmountType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *LinkedReservationInfoType) GetRateOk() (*CurrencyAmountType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *LinkedReservationInfoType) SetRate(v CurrencyAmountType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *LinkedReservationInfoType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetGuarantee

`func (o *LinkedReservationInfoType) GetGuarantee() ResGuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *LinkedReservationInfoType) GetGuaranteeOk() (*ResGuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *LinkedReservationInfoType) SetGuarantee(v ResGuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *LinkedReservationInfoType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetBalance

`func (o *LinkedReservationInfoType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *LinkedReservationInfoType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *LinkedReservationInfoType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *LinkedReservationInfoType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetReservationBlock

`func (o *LinkedReservationInfoType) GetReservationBlock() ReservationBlockType`

GetReservationBlock returns the ReservationBlock field if non-nil, zero value otherwise.

### GetReservationBlockOk

`func (o *LinkedReservationInfoType) GetReservationBlockOk() (*ReservationBlockType, bool)`

GetReservationBlockOk returns a tuple with the ReservationBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationBlock

`func (o *LinkedReservationInfoType) SetReservationBlock(v ReservationBlockType)`

SetReservationBlock sets ReservationBlock field to given value.

### HasReservationBlock

`func (o *LinkedReservationInfoType) HasReservationBlock() bool`

HasReservationBlock returns a boolean if a field has been set.

### GetDisplayColor

`func (o *LinkedReservationInfoType) GetDisplayColor() string`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *LinkedReservationInfoType) GetDisplayColorOk() (*string, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *LinkedReservationInfoType) SetDisplayColor(v string)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *LinkedReservationInfoType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetAllowedActions

`func (o *LinkedReservationInfoType) GetAllowedActions() []ReservationAllowedActionType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *LinkedReservationInfoType) GetAllowedActionsOk() (*[]ReservationAllowedActionType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *LinkedReservationInfoType) SetAllowedActions(v []ReservationAllowedActionType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *LinkedReservationInfoType) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetReservationStatus

`func (o *LinkedReservationInfoType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *LinkedReservationInfoType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *LinkedReservationInfoType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *LinkedReservationInfoType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetHotelId

`func (o *LinkedReservationInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *LinkedReservationInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *LinkedReservationInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *LinkedReservationInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinkReservationType

`func (o *LinkedReservationInfoType) GetLinkReservationType() LinkedReservationType`

GetLinkReservationType returns the LinkReservationType field if non-nil, zero value otherwise.

### GetLinkReservationTypeOk

`func (o *LinkedReservationInfoType) GetLinkReservationTypeOk() (*LinkedReservationType, bool)`

GetLinkReservationTypeOk returns a tuple with the LinkReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkReservationType

`func (o *LinkedReservationInfoType) SetLinkReservationType(v LinkedReservationType)`

SetLinkReservationType sets LinkReservationType field to given value.

### HasLinkReservationType

`func (o *LinkedReservationInfoType) HasLinkReservationType() bool`

HasLinkReservationType returns a boolean if a field has been set.

### GetReverseCheckInAllowed

`func (o *LinkedReservationInfoType) GetReverseCheckInAllowed() bool`

GetReverseCheckInAllowed returns the ReverseCheckInAllowed field if non-nil, zero value otherwise.

### GetReverseCheckInAllowedOk

`func (o *LinkedReservationInfoType) GetReverseCheckInAllowedOk() (*bool, bool)`

GetReverseCheckInAllowedOk returns a tuple with the ReverseCheckInAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReverseCheckInAllowed

`func (o *LinkedReservationInfoType) SetReverseCheckInAllowed(v bool)`

SetReverseCheckInAllowed sets ReverseCheckInAllowed field to given value.

### HasReverseCheckInAllowed

`func (o *LinkedReservationInfoType) HasReverseCheckInAllowed() bool`

HasReverseCheckInAllowed returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *LinkedReservationInfoType) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *LinkedReservationInfoType) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *LinkedReservationInfoType) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *LinkedReservationInfoType) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetSuppressRate

`func (o *LinkedReservationInfoType) GetSuppressRate() bool`

GetSuppressRate returns the SuppressRate field if non-nil, zero value otherwise.

### GetSuppressRateOk

`func (o *LinkedReservationInfoType) GetSuppressRateOk() (*bool, bool)`

GetSuppressRateOk returns a tuple with the SuppressRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuppressRate

`func (o *LinkedReservationInfoType) SetSuppressRate(v bool)`

SetSuppressRate sets SuppressRate field to given value.

### HasSuppressRate

`func (o *LinkedReservationInfoType) HasSuppressRate() bool`

HasSuppressRate returns a boolean if a field has been set.

### GetAdultCount

`func (o *LinkedReservationInfoType) GetAdultCount() int32`

GetAdultCount returns the AdultCount field if non-nil, zero value otherwise.

### GetAdultCountOk

`func (o *LinkedReservationInfoType) GetAdultCountOk() (*int32, bool)`

GetAdultCountOk returns a tuple with the AdultCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultCount

`func (o *LinkedReservationInfoType) SetAdultCount(v int32)`

SetAdultCount sets AdultCount field to given value.

### HasAdultCount

`func (o *LinkedReservationInfoType) HasAdultCount() bool`

HasAdultCount returns a boolean if a field has been set.

### GetChildCount

`func (o *LinkedReservationInfoType) GetChildCount() int32`

GetChildCount returns the ChildCount field if non-nil, zero value otherwise.

### GetChildCountOk

`func (o *LinkedReservationInfoType) GetChildCountOk() (*int32, bool)`

GetChildCountOk returns a tuple with the ChildCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildCount

`func (o *LinkedReservationInfoType) SetChildCount(v int32)`

SetChildCount sets ChildCount field to given value.

### HasChildCount

`func (o *LinkedReservationInfoType) HasChildCount() bool`

HasChildCount returns a boolean if a field has been set.

### GetBackToBack

`func (o *LinkedReservationInfoType) GetBackToBack() bool`

GetBackToBack returns the BackToBack field if non-nil, zero value otherwise.

### GetBackToBackOk

`func (o *LinkedReservationInfoType) GetBackToBackOk() (*bool, bool)`

GetBackToBackOk returns a tuple with the BackToBack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackToBack

`func (o *LinkedReservationInfoType) SetBackToBack(v bool)`

SetBackToBack sets BackToBack field to given value.

### HasBackToBack

`func (o *LinkedReservationInfoType) HasBackToBack() bool`

HasBackToBack returns a boolean if a field has been set.

### GetProfileId

`func (o *LinkedReservationInfoType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *LinkedReservationInfoType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *LinkedReservationInfoType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *LinkedReservationInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetBackToBackSequence

`func (o *LinkedReservationInfoType) GetBackToBackSequence() BackToBackResSequenceType`

GetBackToBackSequence returns the BackToBackSequence field if non-nil, zero value otherwise.

### GetBackToBackSequenceOk

`func (o *LinkedReservationInfoType) GetBackToBackSequenceOk() (*BackToBackResSequenceType, bool)`

GetBackToBackSequenceOk returns a tuple with the BackToBackSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackToBackSequence

`func (o *LinkedReservationInfoType) SetBackToBackSequence(v BackToBackResSequenceType)`

SetBackToBackSequence sets BackToBackSequence field to given value.

### HasBackToBackSequence

`func (o *LinkedReservationInfoType) HasBackToBackSequence() bool`

HasBackToBackSequence returns a boolean if a field has been set.

### GetShared

`func (o *LinkedReservationInfoType) GetShared() bool`

GetShared returns the Shared field if non-nil, zero value otherwise.

### GetSharedOk

`func (o *LinkedReservationInfoType) GetSharedOk() (*bool, bool)`

GetSharedOk returns a tuple with the Shared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShared

`func (o *LinkedReservationInfoType) SetShared(v bool)`

SetShared sets Shared field to given value.

### HasShared

`func (o *LinkedReservationInfoType) HasShared() bool`

HasShared returns a boolean if a field has been set.

### GetBackToBackGroupId

`func (o *LinkedReservationInfoType) GetBackToBackGroupId() string`

GetBackToBackGroupId returns the BackToBackGroupId field if non-nil, zero value otherwise.

### GetBackToBackGroupIdOk

`func (o *LinkedReservationInfoType) GetBackToBackGroupIdOk() (*string, bool)`

GetBackToBackGroupIdOk returns a tuple with the BackToBackGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackToBackGroupId

`func (o *LinkedReservationInfoType) SetBackToBackGroupId(v string)`

SetBackToBackGroupId sets BackToBackGroupId field to given value.

### HasBackToBackGroupId

`func (o *LinkedReservationInfoType) HasBackToBackGroupId() bool`

HasBackToBackGroupId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


