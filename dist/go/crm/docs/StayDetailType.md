# StayDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRestriction** | Pointer to [**ResAccessRestrictionType**](ResAccessRestrictionType.md) |  | [optional] 
**AdvanceCheckIn** | Pointer to [**AdvanceCheckInType**](AdvanceCheckInType.md) |  | [optional] 
**AllotmentCode** | Pointer to **string** | Allotment Code for stay record. | [optional] 
**AllowMobileCheckout** | Pointer to **bool** | Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false. | [optional] 
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**AllowedActions** | Pointer to [**[]ReservationAllowedActionType**](ReservationAllowedActionType.md) | Allowed action. | [optional] 
**AttachedProfiles** | Pointer to [**[]ResAttachedProfileType**](ResAttachedProfileType.md) |  | [optional] 
**BookedArrivalDate** | Pointer to **string** | Booked arrival date of the stay record. | [optional] 
**BookedDepartureDate** | Pointer to **string** | Booked departure date of the stay record. | [optional] 
**BookedRoomType** | Pointer to **string** | Indicate the category of room originally booked. | [optional] 
**BookingDate** | Pointer to **string** | Booking date of the stay record. | [optional] 
**CancellationDate** | Pointer to **string** | Cancellation date of the stay record. | [optional] 
**CancellationInfo** | Pointer to [**ReservationInfoTypeCancellationInfo**](ReservationInfoTypeCancellationInfo.md) |  | [optional] 
**CancelledRoomNights** | Pointer to **int32** | Number of cancelled room nights. | [optional] 
**Cashiering** | Pointer to [**ResCashieringType**](ResCashieringType.md) |  | [optional] 
**ChannelCode** | Pointer to **string** | Indicate channel for stay. | [optional] 
**CommissionPayoutTo** | Pointer to [**CommissionPayoutToType**](CommissionPayoutToType.md) |  | [optional] 
**Complimentaray** | Pointer to **bool** | Indicates the profile stay record is complimentaray. | [optional] 
**ComputedReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Deposit** | Pointer to [**ReservationDepositType**](ReservationDepositType.md) |  | [optional] 
**DisplayColor** | Pointer to **string** | Color setting of the reservation. | [optional] 
**ExchangeRate** | Pointer to **float32** | Exchange Rate. | [optional] 
**ExpectedServiceTime** | Pointer to **string** |  | [optional] 
**GuestPreferredCurrency** | Pointer to **string** | Currency code preferred by guest. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**HotelInterfaceStatusList** | Pointer to [**[]ReservationInterfaceStatusType**](ReservationInterfaceStatusType.md) | Collection of Hotel Interfaces and rights, this is populated only when fetching interface status for rooms. | [optional] 
**HotelName** | Pointer to **string** |  | [optional] 
**Housekeeping** | Pointer to [**ResHousekeepingType**](ResHousekeepingType.md) |  | [optional] 
**KeyCount** | Pointer to **int32** | Number of keys created for the reservation. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastPrivacyPromptDate** | Pointer to **string** | Last Privacy Prompt Date | [optional] 
**MobileNotifications** | Pointer to [**ResMobileNotificationsType**](ResMobileNotificationsType.md) |  | [optional] 
**NoShowRoomNights** | Pointer to **int32** | Number of no show room nights. | [optional] 
**OpenFolio** | Pointer to **bool** | Returns true when reservation has an open folio. | [optional] 
**OptedForCommunication** | Pointer to **bool** | Attribute OptedForCommunication is set to true when the guest has opted for receiving communicationsl related to the reservation. | [optional] 
**PaymentMethod** | Pointer to **string** | Payment Method. | [optional] 
**PreRegistered** | Pointer to **bool** | Defines if the reservation is pre-registered or not. | [optional] 
**PrimarySharer** | Pointer to **bool** | Indicates whether the guest was the primary sharer or not. | [optional] 
**PromotionCode** | Pointer to **string** | Promotion code associated with the stay. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Queue** | Pointer to [**ReservationQueueInformationType**](ReservationQueueInformationType.md) |  | [optional] 
**ReservationCommunication** | Pointer to [**ResCommunicationType**](ResCommunicationType.md) |  | [optional] 
**ReservationFolioWindows** | Pointer to [**[]ReservationFolioWindowType**](ReservationFolioWindowType.md) | Collection of reservation folio windows. | [optional] 
**ReservationGuest** | Pointer to [**ResGuestInfoType**](ResGuestInfoType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**ReservationPaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**ReservationSourceCode** | Pointer to **string** | Indicates the profile stay record reservation source code. | [optional] 
**ReservationSourceType** | Pointer to **string** | Indicates the profile stay record reservation source Type. | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**RevenuesAndBalances** | Pointer to [**ResRevenueBalanceType**](ResRevenueBalanceType.md) |  | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**RoomStay** | Pointer to [**StayInfoType**](StayInfoType.md) |  | [optional] 
**RoomStayReservation** | Pointer to **bool** | Boolean True if this reservation is reserving rooms. False if it is only reserving services. | [optional] 
**SearchMatches** | Pointer to [**[]SearchMatchType**](SearchMatchType.md) | List of Generic Name-Value-Pair Parameters used for super search matches. | [optional] 
**ShareNumber** | Pointer to **string** | Indicates the share Number for Stay if reservation was a share. | [optional] 
**SharedGuests** | Pointer to [**[]ResSharedGuestInfoType**](ResSharedGuestInfoType.md) | Collection of shared guest reservations. | [optional] 
**SourceOfSale** | Pointer to [**SourceOfSaleType**](SourceOfSaleType.md) |  | [optional] 
**Specials** | Pointer to **string** | Set of reservation preferences which belongs to the Specials group. | [optional] 
**StayRecordId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TaxType** | Pointer to [**TaxTypeType**](TaxTypeType.md) |  | [optional] 
**TravelAgentReferenceId** | Pointer to **string** | Travel Agent reference number for stay record. | [optional] 
**TurndownInfo** | Pointer to [**ReservationTurndownInfoType**](ReservationTurndownInfoType.md) |  | [optional] 
**Waitlist** | Pointer to [**WaitlistResType**](WaitlistResType.md) |  | [optional] 
**WalkInIndicator** | Pointer to **bool** | When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in. | [optional] 
**WelcomeOffer** | Pointer to **bool** | This flag will determine wheather the reservation is eligible for Welcome Offer or not. | [optional] 

## Methods

### NewStayDetailType

`func NewStayDetailType() *StayDetailType`

NewStayDetailType instantiates a new StayDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayDetailTypeWithDefaults

`func NewStayDetailTypeWithDefaults() *StayDetailType`

NewStayDetailTypeWithDefaults instantiates a new StayDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRestriction

`func (o *StayDetailType) GetAccessRestriction() ResAccessRestrictionType`

GetAccessRestriction returns the AccessRestriction field if non-nil, zero value otherwise.

### GetAccessRestrictionOk

`func (o *StayDetailType) GetAccessRestrictionOk() (*ResAccessRestrictionType, bool)`

GetAccessRestrictionOk returns a tuple with the AccessRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestriction

`func (o *StayDetailType) SetAccessRestriction(v ResAccessRestrictionType)`

SetAccessRestriction sets AccessRestriction field to given value.

### HasAccessRestriction

`func (o *StayDetailType) HasAccessRestriction() bool`

HasAccessRestriction returns a boolean if a field has been set.

### GetAdvanceCheckIn

`func (o *StayDetailType) GetAdvanceCheckIn() AdvanceCheckInType`

GetAdvanceCheckIn returns the AdvanceCheckIn field if non-nil, zero value otherwise.

### GetAdvanceCheckInOk

`func (o *StayDetailType) GetAdvanceCheckInOk() (*AdvanceCheckInType, bool)`

GetAdvanceCheckInOk returns a tuple with the AdvanceCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckIn

`func (o *StayDetailType) SetAdvanceCheckIn(v AdvanceCheckInType)`

SetAdvanceCheckIn sets AdvanceCheckIn field to given value.

### HasAdvanceCheckIn

`func (o *StayDetailType) HasAdvanceCheckIn() bool`

HasAdvanceCheckIn returns a boolean if a field has been set.

### GetAllotmentCode

`func (o *StayDetailType) GetAllotmentCode() string`

GetAllotmentCode returns the AllotmentCode field if non-nil, zero value otherwise.

### GetAllotmentCodeOk

`func (o *StayDetailType) GetAllotmentCodeOk() (*string, bool)`

GetAllotmentCodeOk returns a tuple with the AllotmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllotmentCode

`func (o *StayDetailType) SetAllotmentCode(v string)`

SetAllotmentCode sets AllotmentCode field to given value.

### HasAllotmentCode

`func (o *StayDetailType) HasAllotmentCode() bool`

HasAllotmentCode returns a boolean if a field has been set.

### GetAllowMobileCheckout

`func (o *StayDetailType) GetAllowMobileCheckout() bool`

GetAllowMobileCheckout returns the AllowMobileCheckout field if non-nil, zero value otherwise.

### GetAllowMobileCheckoutOk

`func (o *StayDetailType) GetAllowMobileCheckoutOk() (*bool, bool)`

GetAllowMobileCheckoutOk returns a tuple with the AllowMobileCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileCheckout

`func (o *StayDetailType) SetAllowMobileCheckout(v bool)`

SetAllowMobileCheckout sets AllowMobileCheckout field to given value.

### HasAllowMobileCheckout

`func (o *StayDetailType) HasAllowMobileCheckout() bool`

HasAllowMobileCheckout returns a boolean if a field has been set.

### GetAllowMobileViewFolio

`func (o *StayDetailType) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *StayDetailType) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *StayDetailType) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *StayDetailType) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetAllowedActions

`func (o *StayDetailType) GetAllowedActions() []ReservationAllowedActionType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *StayDetailType) GetAllowedActionsOk() (*[]ReservationAllowedActionType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *StayDetailType) SetAllowedActions(v []ReservationAllowedActionType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *StayDetailType) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetAttachedProfiles

`func (o *StayDetailType) GetAttachedProfiles() []ResAttachedProfileType`

GetAttachedProfiles returns the AttachedProfiles field if non-nil, zero value otherwise.

### GetAttachedProfilesOk

`func (o *StayDetailType) GetAttachedProfilesOk() (*[]ResAttachedProfileType, bool)`

GetAttachedProfilesOk returns a tuple with the AttachedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachedProfiles

`func (o *StayDetailType) SetAttachedProfiles(v []ResAttachedProfileType)`

SetAttachedProfiles sets AttachedProfiles field to given value.

### HasAttachedProfiles

`func (o *StayDetailType) HasAttachedProfiles() bool`

HasAttachedProfiles returns a boolean if a field has been set.

### GetBookedArrivalDate

`func (o *StayDetailType) GetBookedArrivalDate() string`

GetBookedArrivalDate returns the BookedArrivalDate field if non-nil, zero value otherwise.

### GetBookedArrivalDateOk

`func (o *StayDetailType) GetBookedArrivalDateOk() (*string, bool)`

GetBookedArrivalDateOk returns a tuple with the BookedArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookedArrivalDate

`func (o *StayDetailType) SetBookedArrivalDate(v string)`

SetBookedArrivalDate sets BookedArrivalDate field to given value.

### HasBookedArrivalDate

`func (o *StayDetailType) HasBookedArrivalDate() bool`

HasBookedArrivalDate returns a boolean if a field has been set.

### GetBookedDepartureDate

`func (o *StayDetailType) GetBookedDepartureDate() string`

GetBookedDepartureDate returns the BookedDepartureDate field if non-nil, zero value otherwise.

### GetBookedDepartureDateOk

`func (o *StayDetailType) GetBookedDepartureDateOk() (*string, bool)`

GetBookedDepartureDateOk returns a tuple with the BookedDepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookedDepartureDate

`func (o *StayDetailType) SetBookedDepartureDate(v string)`

SetBookedDepartureDate sets BookedDepartureDate field to given value.

### HasBookedDepartureDate

`func (o *StayDetailType) HasBookedDepartureDate() bool`

HasBookedDepartureDate returns a boolean if a field has been set.

### GetBookedRoomType

`func (o *StayDetailType) GetBookedRoomType() string`

GetBookedRoomType returns the BookedRoomType field if non-nil, zero value otherwise.

### GetBookedRoomTypeOk

`func (o *StayDetailType) GetBookedRoomTypeOk() (*string, bool)`

GetBookedRoomTypeOk returns a tuple with the BookedRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookedRoomType

`func (o *StayDetailType) SetBookedRoomType(v string)`

SetBookedRoomType sets BookedRoomType field to given value.

### HasBookedRoomType

`func (o *StayDetailType) HasBookedRoomType() bool`

HasBookedRoomType returns a boolean if a field has been set.

### GetBookingDate

`func (o *StayDetailType) GetBookingDate() string`

GetBookingDate returns the BookingDate field if non-nil, zero value otherwise.

### GetBookingDateOk

`func (o *StayDetailType) GetBookingDateOk() (*string, bool)`

GetBookingDateOk returns a tuple with the BookingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingDate

`func (o *StayDetailType) SetBookingDate(v string)`

SetBookingDate sets BookingDate field to given value.

### HasBookingDate

`func (o *StayDetailType) HasBookingDate() bool`

HasBookingDate returns a boolean if a field has been set.

### GetCancellationDate

`func (o *StayDetailType) GetCancellationDate() string`

GetCancellationDate returns the CancellationDate field if non-nil, zero value otherwise.

### GetCancellationDateOk

`func (o *StayDetailType) GetCancellationDateOk() (*string, bool)`

GetCancellationDateOk returns a tuple with the CancellationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDate

`func (o *StayDetailType) SetCancellationDate(v string)`

SetCancellationDate sets CancellationDate field to given value.

### HasCancellationDate

`func (o *StayDetailType) HasCancellationDate() bool`

HasCancellationDate returns a boolean if a field has been set.

### GetCancellationInfo

`func (o *StayDetailType) GetCancellationInfo() ReservationInfoTypeCancellationInfo`

GetCancellationInfo returns the CancellationInfo field if non-nil, zero value otherwise.

### GetCancellationInfoOk

`func (o *StayDetailType) GetCancellationInfoOk() (*ReservationInfoTypeCancellationInfo, bool)`

GetCancellationInfoOk returns a tuple with the CancellationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationInfo

`func (o *StayDetailType) SetCancellationInfo(v ReservationInfoTypeCancellationInfo)`

SetCancellationInfo sets CancellationInfo field to given value.

### HasCancellationInfo

`func (o *StayDetailType) HasCancellationInfo() bool`

HasCancellationInfo returns a boolean if a field has been set.

### GetCancelledRoomNights

`func (o *StayDetailType) GetCancelledRoomNights() int32`

GetCancelledRoomNights returns the CancelledRoomNights field if non-nil, zero value otherwise.

### GetCancelledRoomNightsOk

`func (o *StayDetailType) GetCancelledRoomNightsOk() (*int32, bool)`

GetCancelledRoomNightsOk returns a tuple with the CancelledRoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledRoomNights

`func (o *StayDetailType) SetCancelledRoomNights(v int32)`

SetCancelledRoomNights sets CancelledRoomNights field to given value.

### HasCancelledRoomNights

`func (o *StayDetailType) HasCancelledRoomNights() bool`

HasCancelledRoomNights returns a boolean if a field has been set.

### GetCashiering

`func (o *StayDetailType) GetCashiering() ResCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *StayDetailType) GetCashieringOk() (*ResCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *StayDetailType) SetCashiering(v ResCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *StayDetailType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetChannelCode

`func (o *StayDetailType) GetChannelCode() string`

GetChannelCode returns the ChannelCode field if non-nil, zero value otherwise.

### GetChannelCodeOk

`func (o *StayDetailType) GetChannelCodeOk() (*string, bool)`

GetChannelCodeOk returns a tuple with the ChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCode

`func (o *StayDetailType) SetChannelCode(v string)`

SetChannelCode sets ChannelCode field to given value.

### HasChannelCode

`func (o *StayDetailType) HasChannelCode() bool`

HasChannelCode returns a boolean if a field has been set.

### GetCommissionPayoutTo

`func (o *StayDetailType) GetCommissionPayoutTo() CommissionPayoutToType`

GetCommissionPayoutTo returns the CommissionPayoutTo field if non-nil, zero value otherwise.

### GetCommissionPayoutToOk

`func (o *StayDetailType) GetCommissionPayoutToOk() (*CommissionPayoutToType, bool)`

GetCommissionPayoutToOk returns a tuple with the CommissionPayoutTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPayoutTo

`func (o *StayDetailType) SetCommissionPayoutTo(v CommissionPayoutToType)`

SetCommissionPayoutTo sets CommissionPayoutTo field to given value.

### HasCommissionPayoutTo

`func (o *StayDetailType) HasCommissionPayoutTo() bool`

HasCommissionPayoutTo returns a boolean if a field has been set.

### GetComplimentaray

`func (o *StayDetailType) GetComplimentaray() bool`

GetComplimentaray returns the Complimentaray field if non-nil, zero value otherwise.

### GetComplimentarayOk

`func (o *StayDetailType) GetComplimentarayOk() (*bool, bool)`

GetComplimentarayOk returns a tuple with the Complimentaray field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentaray

`func (o *StayDetailType) SetComplimentaray(v bool)`

SetComplimentaray sets Complimentaray field to given value.

### HasComplimentaray

`func (o *StayDetailType) HasComplimentaray() bool`

HasComplimentaray returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *StayDetailType) GetComputedReservationStatus() PMSResStatusType`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *StayDetailType) GetComputedReservationStatusOk() (*PMSResStatusType, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *StayDetailType) SetComputedReservationStatus(v PMSResStatusType)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *StayDetailType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *StayDetailType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *StayDetailType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *StayDetailType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *StayDetailType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *StayDetailType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *StayDetailType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *StayDetailType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *StayDetailType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetDeposit

`func (o *StayDetailType) GetDeposit() ReservationDepositType`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *StayDetailType) GetDepositOk() (*ReservationDepositType, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *StayDetailType) SetDeposit(v ReservationDepositType)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *StayDetailType) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetDisplayColor

`func (o *StayDetailType) GetDisplayColor() string`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *StayDetailType) GetDisplayColorOk() (*string, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *StayDetailType) SetDisplayColor(v string)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *StayDetailType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetExchangeRate

`func (o *StayDetailType) GetExchangeRate() float32`

GetExchangeRate returns the ExchangeRate field if non-nil, zero value otherwise.

### GetExchangeRateOk

`func (o *StayDetailType) GetExchangeRateOk() (*float32, bool)`

GetExchangeRateOk returns a tuple with the ExchangeRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRate

`func (o *StayDetailType) SetExchangeRate(v float32)`

SetExchangeRate sets ExchangeRate field to given value.

### HasExchangeRate

`func (o *StayDetailType) HasExchangeRate() bool`

HasExchangeRate returns a boolean if a field has been set.

### GetExpectedServiceTime

`func (o *StayDetailType) GetExpectedServiceTime() string`

GetExpectedServiceTime returns the ExpectedServiceTime field if non-nil, zero value otherwise.

### GetExpectedServiceTimeOk

`func (o *StayDetailType) GetExpectedServiceTimeOk() (*string, bool)`

GetExpectedServiceTimeOk returns a tuple with the ExpectedServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedServiceTime

`func (o *StayDetailType) SetExpectedServiceTime(v string)`

SetExpectedServiceTime sets ExpectedServiceTime field to given value.

### HasExpectedServiceTime

`func (o *StayDetailType) HasExpectedServiceTime() bool`

HasExpectedServiceTime returns a boolean if a field has been set.

### GetGuestPreferredCurrency

`func (o *StayDetailType) GetGuestPreferredCurrency() string`

GetGuestPreferredCurrency returns the GuestPreferredCurrency field if non-nil, zero value otherwise.

### GetGuestPreferredCurrencyOk

`func (o *StayDetailType) GetGuestPreferredCurrencyOk() (*string, bool)`

GetGuestPreferredCurrencyOk returns a tuple with the GuestPreferredCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestPreferredCurrency

`func (o *StayDetailType) SetGuestPreferredCurrency(v string)`

SetGuestPreferredCurrency sets GuestPreferredCurrency field to given value.

### HasGuestPreferredCurrency

`func (o *StayDetailType) HasGuestPreferredCurrency() bool`

HasGuestPreferredCurrency returns a boolean if a field has been set.

### GetHotelId

`func (o *StayDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StayDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StayDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StayDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelInterfaceStatusList

`func (o *StayDetailType) GetHotelInterfaceStatusList() []ReservationInterfaceStatusType`

GetHotelInterfaceStatusList returns the HotelInterfaceStatusList field if non-nil, zero value otherwise.

### GetHotelInterfaceStatusListOk

`func (o *StayDetailType) GetHotelInterfaceStatusListOk() (*[]ReservationInterfaceStatusType, bool)`

GetHotelInterfaceStatusListOk returns a tuple with the HotelInterfaceStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInterfaceStatusList

`func (o *StayDetailType) SetHotelInterfaceStatusList(v []ReservationInterfaceStatusType)`

SetHotelInterfaceStatusList sets HotelInterfaceStatusList field to given value.

### HasHotelInterfaceStatusList

`func (o *StayDetailType) HasHotelInterfaceStatusList() bool`

HasHotelInterfaceStatusList returns a boolean if a field has been set.

### GetHotelName

`func (o *StayDetailType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *StayDetailType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *StayDetailType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *StayDetailType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHousekeeping

`func (o *StayDetailType) GetHousekeeping() ResHousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *StayDetailType) GetHousekeepingOk() (*ResHousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *StayDetailType) SetHousekeeping(v ResHousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *StayDetailType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetKeyCount

`func (o *StayDetailType) GetKeyCount() int32`

GetKeyCount returns the KeyCount field if non-nil, zero value otherwise.

### GetKeyCountOk

`func (o *StayDetailType) GetKeyCountOk() (*int32, bool)`

GetKeyCountOk returns a tuple with the KeyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCount

`func (o *StayDetailType) SetKeyCount(v int32)`

SetKeyCount sets KeyCount field to given value.

### HasKeyCount

`func (o *StayDetailType) HasKeyCount() bool`

HasKeyCount returns a boolean if a field has been set.

### GetLastModifierId

`func (o *StayDetailType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *StayDetailType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *StayDetailType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *StayDetailType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *StayDetailType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *StayDetailType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *StayDetailType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *StayDetailType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastPrivacyPromptDate

`func (o *StayDetailType) GetLastPrivacyPromptDate() string`

GetLastPrivacyPromptDate returns the LastPrivacyPromptDate field if non-nil, zero value otherwise.

### GetLastPrivacyPromptDateOk

`func (o *StayDetailType) GetLastPrivacyPromptDateOk() (*string, bool)`

GetLastPrivacyPromptDateOk returns a tuple with the LastPrivacyPromptDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPrivacyPromptDate

`func (o *StayDetailType) SetLastPrivacyPromptDate(v string)`

SetLastPrivacyPromptDate sets LastPrivacyPromptDate field to given value.

### HasLastPrivacyPromptDate

`func (o *StayDetailType) HasLastPrivacyPromptDate() bool`

HasLastPrivacyPromptDate returns a boolean if a field has been set.

### GetMobileNotifications

`func (o *StayDetailType) GetMobileNotifications() ResMobileNotificationsType`

GetMobileNotifications returns the MobileNotifications field if non-nil, zero value otherwise.

### GetMobileNotificationsOk

`func (o *StayDetailType) GetMobileNotificationsOk() (*ResMobileNotificationsType, bool)`

GetMobileNotificationsOk returns a tuple with the MobileNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileNotifications

`func (o *StayDetailType) SetMobileNotifications(v ResMobileNotificationsType)`

SetMobileNotifications sets MobileNotifications field to given value.

### HasMobileNotifications

`func (o *StayDetailType) HasMobileNotifications() bool`

HasMobileNotifications returns a boolean if a field has been set.

### GetNoShowRoomNights

`func (o *StayDetailType) GetNoShowRoomNights() int32`

GetNoShowRoomNights returns the NoShowRoomNights field if non-nil, zero value otherwise.

### GetNoShowRoomNightsOk

`func (o *StayDetailType) GetNoShowRoomNightsOk() (*int32, bool)`

GetNoShowRoomNightsOk returns a tuple with the NoShowRoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoShowRoomNights

`func (o *StayDetailType) SetNoShowRoomNights(v int32)`

SetNoShowRoomNights sets NoShowRoomNights field to given value.

### HasNoShowRoomNights

`func (o *StayDetailType) HasNoShowRoomNights() bool`

HasNoShowRoomNights returns a boolean if a field has been set.

### GetOpenFolio

`func (o *StayDetailType) GetOpenFolio() bool`

GetOpenFolio returns the OpenFolio field if non-nil, zero value otherwise.

### GetOpenFolioOk

`func (o *StayDetailType) GetOpenFolioOk() (*bool, bool)`

GetOpenFolioOk returns a tuple with the OpenFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenFolio

`func (o *StayDetailType) SetOpenFolio(v bool)`

SetOpenFolio sets OpenFolio field to given value.

### HasOpenFolio

`func (o *StayDetailType) HasOpenFolio() bool`

HasOpenFolio returns a boolean if a field has been set.

### GetOptedForCommunication

`func (o *StayDetailType) GetOptedForCommunication() bool`

GetOptedForCommunication returns the OptedForCommunication field if non-nil, zero value otherwise.

### GetOptedForCommunicationOk

`func (o *StayDetailType) GetOptedForCommunicationOk() (*bool, bool)`

GetOptedForCommunicationOk returns a tuple with the OptedForCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptedForCommunication

`func (o *StayDetailType) SetOptedForCommunication(v bool)`

SetOptedForCommunication sets OptedForCommunication field to given value.

### HasOptedForCommunication

`func (o *StayDetailType) HasOptedForCommunication() bool`

HasOptedForCommunication returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *StayDetailType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *StayDetailType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *StayDetailType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *StayDetailType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPreRegistered

`func (o *StayDetailType) GetPreRegistered() bool`

GetPreRegistered returns the PreRegistered field if non-nil, zero value otherwise.

### GetPreRegisteredOk

`func (o *StayDetailType) GetPreRegisteredOk() (*bool, bool)`

GetPreRegisteredOk returns a tuple with the PreRegistered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreRegistered

`func (o *StayDetailType) SetPreRegistered(v bool)`

SetPreRegistered sets PreRegistered field to given value.

### HasPreRegistered

`func (o *StayDetailType) HasPreRegistered() bool`

HasPreRegistered returns a boolean if a field has been set.

### GetPrimarySharer

`func (o *StayDetailType) GetPrimarySharer() bool`

GetPrimarySharer returns the PrimarySharer field if non-nil, zero value otherwise.

### GetPrimarySharerOk

`func (o *StayDetailType) GetPrimarySharerOk() (*bool, bool)`

GetPrimarySharerOk returns a tuple with the PrimarySharer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimarySharer

`func (o *StayDetailType) SetPrimarySharer(v bool)`

SetPrimarySharer sets PrimarySharer field to given value.

### HasPrimarySharer

`func (o *StayDetailType) HasPrimarySharer() bool`

HasPrimarySharer returns a boolean if a field has been set.

### GetPromotionCode

`func (o *StayDetailType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *StayDetailType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *StayDetailType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *StayDetailType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetPurgeDate

`func (o *StayDetailType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *StayDetailType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *StayDetailType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *StayDetailType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetQueue

`func (o *StayDetailType) GetQueue() ReservationQueueInformationType`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *StayDetailType) GetQueueOk() (*ReservationQueueInformationType, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *StayDetailType) SetQueue(v ReservationQueueInformationType)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *StayDetailType) HasQueue() bool`

HasQueue returns a boolean if a field has been set.

### GetReservationCommunication

`func (o *StayDetailType) GetReservationCommunication() ResCommunicationType`

GetReservationCommunication returns the ReservationCommunication field if non-nil, zero value otherwise.

### GetReservationCommunicationOk

`func (o *StayDetailType) GetReservationCommunicationOk() (*ResCommunicationType, bool)`

GetReservationCommunicationOk returns a tuple with the ReservationCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCommunication

`func (o *StayDetailType) SetReservationCommunication(v ResCommunicationType)`

SetReservationCommunication sets ReservationCommunication field to given value.

### HasReservationCommunication

`func (o *StayDetailType) HasReservationCommunication() bool`

HasReservationCommunication returns a boolean if a field has been set.

### GetReservationFolioWindows

`func (o *StayDetailType) GetReservationFolioWindows() []ReservationFolioWindowType`

GetReservationFolioWindows returns the ReservationFolioWindows field if non-nil, zero value otherwise.

### GetReservationFolioWindowsOk

`func (o *StayDetailType) GetReservationFolioWindowsOk() (*[]ReservationFolioWindowType, bool)`

GetReservationFolioWindowsOk returns a tuple with the ReservationFolioWindows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFolioWindows

`func (o *StayDetailType) SetReservationFolioWindows(v []ReservationFolioWindowType)`

SetReservationFolioWindows sets ReservationFolioWindows field to given value.

### HasReservationFolioWindows

`func (o *StayDetailType) HasReservationFolioWindows() bool`

HasReservationFolioWindows returns a boolean if a field has been set.

### GetReservationGuest

`func (o *StayDetailType) GetReservationGuest() ResGuestInfoType`

GetReservationGuest returns the ReservationGuest field if non-nil, zero value otherwise.

### GetReservationGuestOk

`func (o *StayDetailType) GetReservationGuestOk() (*ResGuestInfoType, bool)`

GetReservationGuestOk returns a tuple with the ReservationGuest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuest

`func (o *StayDetailType) SetReservationGuest(v ResGuestInfoType)`

SetReservationGuest sets ReservationGuest field to given value.

### HasReservationGuest

`func (o *StayDetailType) HasReservationGuest() bool`

HasReservationGuest returns a boolean if a field has been set.

### GetReservationIdList

`func (o *StayDetailType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *StayDetailType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *StayDetailType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *StayDetailType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationIndicators

`func (o *StayDetailType) GetReservationIndicators() []IndicatorType`

GetReservationIndicators returns the ReservationIndicators field if non-nil, zero value otherwise.

### GetReservationIndicatorsOk

`func (o *StayDetailType) GetReservationIndicatorsOk() (*[]IndicatorType, bool)`

GetReservationIndicatorsOk returns a tuple with the ReservationIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIndicators

`func (o *StayDetailType) SetReservationIndicators(v []IndicatorType)`

SetReservationIndicators sets ReservationIndicators field to given value.

### HasReservationIndicators

`func (o *StayDetailType) HasReservationIndicators() bool`

HasReservationIndicators returns a boolean if a field has been set.

### GetReservationPaymentMethod

`func (o *StayDetailType) GetReservationPaymentMethod() ReservationPaymentMethodType`

GetReservationPaymentMethod returns the ReservationPaymentMethod field if non-nil, zero value otherwise.

### GetReservationPaymentMethodOk

`func (o *StayDetailType) GetReservationPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodOk returns a tuple with the ReservationPaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethod

`func (o *StayDetailType) SetReservationPaymentMethod(v ReservationPaymentMethodType)`

SetReservationPaymentMethod sets ReservationPaymentMethod field to given value.

### HasReservationPaymentMethod

`func (o *StayDetailType) HasReservationPaymentMethod() bool`

HasReservationPaymentMethod returns a boolean if a field has been set.

### GetReservationSourceCode

`func (o *StayDetailType) GetReservationSourceCode() string`

GetReservationSourceCode returns the ReservationSourceCode field if non-nil, zero value otherwise.

### GetReservationSourceCodeOk

`func (o *StayDetailType) GetReservationSourceCodeOk() (*string, bool)`

GetReservationSourceCodeOk returns a tuple with the ReservationSourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationSourceCode

`func (o *StayDetailType) SetReservationSourceCode(v string)`

SetReservationSourceCode sets ReservationSourceCode field to given value.

### HasReservationSourceCode

`func (o *StayDetailType) HasReservationSourceCode() bool`

HasReservationSourceCode returns a boolean if a field has been set.

### GetReservationSourceType

`func (o *StayDetailType) GetReservationSourceType() string`

GetReservationSourceType returns the ReservationSourceType field if non-nil, zero value otherwise.

### GetReservationSourceTypeOk

`func (o *StayDetailType) GetReservationSourceTypeOk() (*string, bool)`

GetReservationSourceTypeOk returns a tuple with the ReservationSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationSourceType

`func (o *StayDetailType) SetReservationSourceType(v string)`

SetReservationSourceType sets ReservationSourceType field to given value.

### HasReservationSourceType

`func (o *StayDetailType) HasReservationSourceType() bool`

HasReservationSourceType returns a boolean if a field has been set.

### GetReservationStatus

`func (o *StayDetailType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *StayDetailType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *StayDetailType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *StayDetailType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRevenuesAndBalances

`func (o *StayDetailType) GetRevenuesAndBalances() ResRevenueBalanceType`

GetRevenuesAndBalances returns the RevenuesAndBalances field if non-nil, zero value otherwise.

### GetRevenuesAndBalancesOk

`func (o *StayDetailType) GetRevenuesAndBalancesOk() (*ResRevenueBalanceType, bool)`

GetRevenuesAndBalancesOk returns a tuple with the RevenuesAndBalances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenuesAndBalances

`func (o *StayDetailType) SetRevenuesAndBalances(v ResRevenueBalanceType)`

SetRevenuesAndBalances sets RevenuesAndBalances field to given value.

### HasRevenuesAndBalances

`func (o *StayDetailType) HasRevenuesAndBalances() bool`

HasRevenuesAndBalances returns a boolean if a field has been set.

### GetRoomStatus

`func (o *StayDetailType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *StayDetailType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *StayDetailType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *StayDetailType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetRoomStay

`func (o *StayDetailType) GetRoomStay() StayInfoType`

GetRoomStay returns the RoomStay field if non-nil, zero value otherwise.

### GetRoomStayOk

`func (o *StayDetailType) GetRoomStayOk() (*StayInfoType, bool)`

GetRoomStayOk returns a tuple with the RoomStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStay

`func (o *StayDetailType) SetRoomStay(v StayInfoType)`

SetRoomStay sets RoomStay field to given value.

### HasRoomStay

`func (o *StayDetailType) HasRoomStay() bool`

HasRoomStay returns a boolean if a field has been set.

### GetRoomStayReservation

`func (o *StayDetailType) GetRoomStayReservation() bool`

GetRoomStayReservation returns the RoomStayReservation field if non-nil, zero value otherwise.

### GetRoomStayReservationOk

`func (o *StayDetailType) GetRoomStayReservationOk() (*bool, bool)`

GetRoomStayReservationOk returns a tuple with the RoomStayReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStayReservation

`func (o *StayDetailType) SetRoomStayReservation(v bool)`

SetRoomStayReservation sets RoomStayReservation field to given value.

### HasRoomStayReservation

`func (o *StayDetailType) HasRoomStayReservation() bool`

HasRoomStayReservation returns a boolean if a field has been set.

### GetSearchMatches

`func (o *StayDetailType) GetSearchMatches() []SearchMatchType`

GetSearchMatches returns the SearchMatches field if non-nil, zero value otherwise.

### GetSearchMatchesOk

`func (o *StayDetailType) GetSearchMatchesOk() (*[]SearchMatchType, bool)`

GetSearchMatchesOk returns a tuple with the SearchMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchMatches

`func (o *StayDetailType) SetSearchMatches(v []SearchMatchType)`

SetSearchMatches sets SearchMatches field to given value.

### HasSearchMatches

`func (o *StayDetailType) HasSearchMatches() bool`

HasSearchMatches returns a boolean if a field has been set.

### GetShareNumber

`func (o *StayDetailType) GetShareNumber() string`

GetShareNumber returns the ShareNumber field if non-nil, zero value otherwise.

### GetShareNumberOk

`func (o *StayDetailType) GetShareNumberOk() (*string, bool)`

GetShareNumberOk returns a tuple with the ShareNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareNumber

`func (o *StayDetailType) SetShareNumber(v string)`

SetShareNumber sets ShareNumber field to given value.

### HasShareNumber

`func (o *StayDetailType) HasShareNumber() bool`

HasShareNumber returns a boolean if a field has been set.

### GetSharedGuests

`func (o *StayDetailType) GetSharedGuests() []ResSharedGuestInfoType`

GetSharedGuests returns the SharedGuests field if non-nil, zero value otherwise.

### GetSharedGuestsOk

`func (o *StayDetailType) GetSharedGuestsOk() (*[]ResSharedGuestInfoType, bool)`

GetSharedGuestsOk returns a tuple with the SharedGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedGuests

`func (o *StayDetailType) SetSharedGuests(v []ResSharedGuestInfoType)`

SetSharedGuests sets SharedGuests field to given value.

### HasSharedGuests

`func (o *StayDetailType) HasSharedGuests() bool`

HasSharedGuests returns a boolean if a field has been set.

### GetSourceOfSale

`func (o *StayDetailType) GetSourceOfSale() SourceOfSaleType`

GetSourceOfSale returns the SourceOfSale field if non-nil, zero value otherwise.

### GetSourceOfSaleOk

`func (o *StayDetailType) GetSourceOfSaleOk() (*SourceOfSaleType, bool)`

GetSourceOfSaleOk returns a tuple with the SourceOfSale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfSale

`func (o *StayDetailType) SetSourceOfSale(v SourceOfSaleType)`

SetSourceOfSale sets SourceOfSale field to given value.

### HasSourceOfSale

`func (o *StayDetailType) HasSourceOfSale() bool`

HasSourceOfSale returns a boolean if a field has been set.

### GetSpecials

`func (o *StayDetailType) GetSpecials() string`

GetSpecials returns the Specials field if non-nil, zero value otherwise.

### GetSpecialsOk

`func (o *StayDetailType) GetSpecialsOk() (*string, bool)`

GetSpecialsOk returns a tuple with the Specials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecials

`func (o *StayDetailType) SetSpecials(v string)`

SetSpecials sets Specials field to given value.

### HasSpecials

`func (o *StayDetailType) HasSpecials() bool`

HasSpecials returns a boolean if a field has been set.

### GetStayRecordId

`func (o *StayDetailType) GetStayRecordId() UniqueIDType`

GetStayRecordId returns the StayRecordId field if non-nil, zero value otherwise.

### GetStayRecordIdOk

`func (o *StayDetailType) GetStayRecordIdOk() (*UniqueIDType, bool)`

GetStayRecordIdOk returns a tuple with the StayRecordId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayRecordId

`func (o *StayDetailType) SetStayRecordId(v UniqueIDType)`

SetStayRecordId sets StayRecordId field to given value.

### HasStayRecordId

`func (o *StayDetailType) HasStayRecordId() bool`

HasStayRecordId returns a boolean if a field has been set.

### GetTaxType

`func (o *StayDetailType) GetTaxType() TaxTypeType`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *StayDetailType) GetTaxTypeOk() (*TaxTypeType, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *StayDetailType) SetTaxType(v TaxTypeType)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *StayDetailType) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetTravelAgentReferenceId

`func (o *StayDetailType) GetTravelAgentReferenceId() string`

GetTravelAgentReferenceId returns the TravelAgentReferenceId field if non-nil, zero value otherwise.

### GetTravelAgentReferenceIdOk

`func (o *StayDetailType) GetTravelAgentReferenceIdOk() (*string, bool)`

GetTravelAgentReferenceIdOk returns a tuple with the TravelAgentReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelAgentReferenceId

`func (o *StayDetailType) SetTravelAgentReferenceId(v string)`

SetTravelAgentReferenceId sets TravelAgentReferenceId field to given value.

### HasTravelAgentReferenceId

`func (o *StayDetailType) HasTravelAgentReferenceId() bool`

HasTravelAgentReferenceId returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *StayDetailType) GetTurndownInfo() ReservationTurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *StayDetailType) GetTurndownInfoOk() (*ReservationTurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *StayDetailType) SetTurndownInfo(v ReservationTurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *StayDetailType) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.

### GetWaitlist

`func (o *StayDetailType) GetWaitlist() WaitlistResType`

GetWaitlist returns the Waitlist field if non-nil, zero value otherwise.

### GetWaitlistOk

`func (o *StayDetailType) GetWaitlistOk() (*WaitlistResType, bool)`

GetWaitlistOk returns a tuple with the Waitlist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlist

`func (o *StayDetailType) SetWaitlist(v WaitlistResType)`

SetWaitlist sets Waitlist field to given value.

### HasWaitlist

`func (o *StayDetailType) HasWaitlist() bool`

HasWaitlist returns a boolean if a field has been set.

### GetWalkInIndicator

`func (o *StayDetailType) GetWalkInIndicator() bool`

GetWalkInIndicator returns the WalkInIndicator field if non-nil, zero value otherwise.

### GetWalkInIndicatorOk

`func (o *StayDetailType) GetWalkInIndicatorOk() (*bool, bool)`

GetWalkInIndicatorOk returns a tuple with the WalkInIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalkInIndicator

`func (o *StayDetailType) SetWalkInIndicator(v bool)`

SetWalkInIndicator sets WalkInIndicator field to given value.

### HasWalkInIndicator

`func (o *StayDetailType) HasWalkInIndicator() bool`

HasWalkInIndicator returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *StayDetailType) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *StayDetailType) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *StayDetailType) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *StayDetailType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


