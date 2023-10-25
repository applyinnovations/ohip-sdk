# ReservationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRestriction** | Pointer to [**ResAccessRestrictionType**](ResAccessRestrictionType.md) |  | [optional] 
**AdvanceCheckIn** | Pointer to [**AdvanceCheckInType**](AdvanceCheckInType.md) |  | [optional] 
**AllowMobileCheckout** | Pointer to **bool** | Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false. | [optional] 
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**AllowedActions** | Pointer to [**[]ReservationAllowedActionType**](ReservationAllowedActionType.md) | Allowed action. | [optional] 
**AttachedProfiles** | Pointer to [**[]ResAttachedProfileType**](ResAttachedProfileType.md) |  | [optional] 
**CancellationInfo** | Pointer to [**ReservationInfoTypeCancellationInfo**](ReservationInfoTypeCancellationInfo.md) |  | [optional] 
**Cashiering** | Pointer to [**ResCashieringType**](ResCashieringType.md) |  | [optional] 
**CommissionPayoutTo** | Pointer to [**CommissionPayoutToType**](CommissionPayoutToType.md) |  | [optional] 
**ComputedReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Deposit** | Pointer to [**ReservationDepositType**](ReservationDepositType.md) |  | [optional] 
**DisplayColor** | Pointer to **string** | Color setting of the reservation. | [optional] 
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
**OpenFolio** | Pointer to **bool** | Returns true when reservation has an open folio. | [optional] 
**OptedForCommunication** | Pointer to **bool** | Attribute OptedForCommunication is set to true when the guest has opted for receiving communicationsl related to the reservation. | [optional] 
**PaymentMethod** | Pointer to **string** | Payment Method. | [optional] 
**PreRegistered** | Pointer to **bool** | Defines if the reservation is pre-registered or not. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Queue** | Pointer to [**ReservationQueueInformationType**](ReservationQueueInformationType.md) |  | [optional] 
**ReservationCommunication** | Pointer to [**ResCommunicationType**](ResCommunicationType.md) |  | [optional] 
**ReservationFolioWindows** | Pointer to [**[]ReservationFolioWindowType**](ReservationFolioWindowType.md) | Collection of reservation folio windows. | [optional] 
**ReservationGuest** | Pointer to [**ResGuestInfoType**](ResGuestInfoType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**ReservationPaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**RevenuesAndBalances** | Pointer to [**ResRevenueBalanceType**](ResRevenueBalanceType.md) |  | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**RoomStay** | Pointer to [**StayInfoType**](StayInfoType.md) |  | [optional] 
**RoomStayReservation** | Pointer to **bool** | Boolean True if this reservation is reserving rooms. False if it is only reserving services. | [optional] 
**SearchMatches** | Pointer to [**[]SearchMatchType**](SearchMatchType.md) | List of Generic Name-Value-Pair Parameters used for super search matches. | [optional] 
**SharedGuests** | Pointer to [**[]ResSharedGuestInfoType**](ResSharedGuestInfoType.md) | Collection of shared guest reservations. | [optional] 
**SourceOfSale** | Pointer to [**SourceOfSaleType**](SourceOfSaleType.md) |  | [optional] 
**Specials** | Pointer to **string** | Set of reservation preferences which belongs to the Specials group. | [optional] 
**TaxType** | Pointer to [**TaxTypeType**](TaxTypeType.md) |  | [optional] 
**TurndownInfo** | Pointer to [**ReservationTurndownInfoType**](ReservationTurndownInfoType.md) |  | [optional] 
**Waitlist** | Pointer to [**WaitlistResType**](WaitlistResType.md) |  | [optional] 
**WalkInIndicator** | Pointer to **bool** | When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in. | [optional] 
**WelcomeOffer** | Pointer to **bool** | This flag will determine wheather the reservation is eligible for Welcome Offer or not. | [optional] 

## Methods

### NewReservationInfoType

`func NewReservationInfoType() *ReservationInfoType`

NewReservationInfoType instantiates a new ReservationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationInfoTypeWithDefaults

`func NewReservationInfoTypeWithDefaults() *ReservationInfoType`

NewReservationInfoTypeWithDefaults instantiates a new ReservationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRestriction

`func (o *ReservationInfoType) GetAccessRestriction() ResAccessRestrictionType`

GetAccessRestriction returns the AccessRestriction field if non-nil, zero value otherwise.

### GetAccessRestrictionOk

`func (o *ReservationInfoType) GetAccessRestrictionOk() (*ResAccessRestrictionType, bool)`

GetAccessRestrictionOk returns a tuple with the AccessRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestriction

`func (o *ReservationInfoType) SetAccessRestriction(v ResAccessRestrictionType)`

SetAccessRestriction sets AccessRestriction field to given value.

### HasAccessRestriction

`func (o *ReservationInfoType) HasAccessRestriction() bool`

HasAccessRestriction returns a boolean if a field has been set.

### GetAdvanceCheckIn

`func (o *ReservationInfoType) GetAdvanceCheckIn() AdvanceCheckInType`

GetAdvanceCheckIn returns the AdvanceCheckIn field if non-nil, zero value otherwise.

### GetAdvanceCheckInOk

`func (o *ReservationInfoType) GetAdvanceCheckInOk() (*AdvanceCheckInType, bool)`

GetAdvanceCheckInOk returns a tuple with the AdvanceCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckIn

`func (o *ReservationInfoType) SetAdvanceCheckIn(v AdvanceCheckInType)`

SetAdvanceCheckIn sets AdvanceCheckIn field to given value.

### HasAdvanceCheckIn

`func (o *ReservationInfoType) HasAdvanceCheckIn() bool`

HasAdvanceCheckIn returns a boolean if a field has been set.

### GetAllowMobileCheckout

`func (o *ReservationInfoType) GetAllowMobileCheckout() bool`

GetAllowMobileCheckout returns the AllowMobileCheckout field if non-nil, zero value otherwise.

### GetAllowMobileCheckoutOk

`func (o *ReservationInfoType) GetAllowMobileCheckoutOk() (*bool, bool)`

GetAllowMobileCheckoutOk returns a tuple with the AllowMobileCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileCheckout

`func (o *ReservationInfoType) SetAllowMobileCheckout(v bool)`

SetAllowMobileCheckout sets AllowMobileCheckout field to given value.

### HasAllowMobileCheckout

`func (o *ReservationInfoType) HasAllowMobileCheckout() bool`

HasAllowMobileCheckout returns a boolean if a field has been set.

### GetAllowMobileViewFolio

`func (o *ReservationInfoType) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *ReservationInfoType) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *ReservationInfoType) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *ReservationInfoType) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetAllowedActions

`func (o *ReservationInfoType) GetAllowedActions() []ReservationAllowedActionType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *ReservationInfoType) GetAllowedActionsOk() (*[]ReservationAllowedActionType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *ReservationInfoType) SetAllowedActions(v []ReservationAllowedActionType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *ReservationInfoType) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetAttachedProfiles

`func (o *ReservationInfoType) GetAttachedProfiles() []ResAttachedProfileType`

GetAttachedProfiles returns the AttachedProfiles field if non-nil, zero value otherwise.

### GetAttachedProfilesOk

`func (o *ReservationInfoType) GetAttachedProfilesOk() (*[]ResAttachedProfileType, bool)`

GetAttachedProfilesOk returns a tuple with the AttachedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachedProfiles

`func (o *ReservationInfoType) SetAttachedProfiles(v []ResAttachedProfileType)`

SetAttachedProfiles sets AttachedProfiles field to given value.

### HasAttachedProfiles

`func (o *ReservationInfoType) HasAttachedProfiles() bool`

HasAttachedProfiles returns a boolean if a field has been set.

### GetCancellationInfo

`func (o *ReservationInfoType) GetCancellationInfo() ReservationInfoTypeCancellationInfo`

GetCancellationInfo returns the CancellationInfo field if non-nil, zero value otherwise.

### GetCancellationInfoOk

`func (o *ReservationInfoType) GetCancellationInfoOk() (*ReservationInfoTypeCancellationInfo, bool)`

GetCancellationInfoOk returns a tuple with the CancellationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationInfo

`func (o *ReservationInfoType) SetCancellationInfo(v ReservationInfoTypeCancellationInfo)`

SetCancellationInfo sets CancellationInfo field to given value.

### HasCancellationInfo

`func (o *ReservationInfoType) HasCancellationInfo() bool`

HasCancellationInfo returns a boolean if a field has been set.

### GetCashiering

`func (o *ReservationInfoType) GetCashiering() ResCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *ReservationInfoType) GetCashieringOk() (*ResCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *ReservationInfoType) SetCashiering(v ResCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *ReservationInfoType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetCommissionPayoutTo

`func (o *ReservationInfoType) GetCommissionPayoutTo() CommissionPayoutToType`

GetCommissionPayoutTo returns the CommissionPayoutTo field if non-nil, zero value otherwise.

### GetCommissionPayoutToOk

`func (o *ReservationInfoType) GetCommissionPayoutToOk() (*CommissionPayoutToType, bool)`

GetCommissionPayoutToOk returns a tuple with the CommissionPayoutTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPayoutTo

`func (o *ReservationInfoType) SetCommissionPayoutTo(v CommissionPayoutToType)`

SetCommissionPayoutTo sets CommissionPayoutTo field to given value.

### HasCommissionPayoutTo

`func (o *ReservationInfoType) HasCommissionPayoutTo() bool`

HasCommissionPayoutTo returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *ReservationInfoType) GetComputedReservationStatus() PMSResStatusType`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *ReservationInfoType) GetComputedReservationStatusOk() (*PMSResStatusType, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *ReservationInfoType) SetComputedReservationStatus(v PMSResStatusType)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *ReservationInfoType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ReservationInfoType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ReservationInfoType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ReservationInfoType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ReservationInfoType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ReservationInfoType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ReservationInfoType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ReservationInfoType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ReservationInfoType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetDeposit

`func (o *ReservationInfoType) GetDeposit() ReservationDepositType`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *ReservationInfoType) GetDepositOk() (*ReservationDepositType, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *ReservationInfoType) SetDeposit(v ReservationDepositType)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *ReservationInfoType) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetDisplayColor

`func (o *ReservationInfoType) GetDisplayColor() string`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *ReservationInfoType) GetDisplayColorOk() (*string, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *ReservationInfoType) SetDisplayColor(v string)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *ReservationInfoType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetExpectedServiceTime

`func (o *ReservationInfoType) GetExpectedServiceTime() string`

GetExpectedServiceTime returns the ExpectedServiceTime field if non-nil, zero value otherwise.

### GetExpectedServiceTimeOk

`func (o *ReservationInfoType) GetExpectedServiceTimeOk() (*string, bool)`

GetExpectedServiceTimeOk returns a tuple with the ExpectedServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedServiceTime

`func (o *ReservationInfoType) SetExpectedServiceTime(v string)`

SetExpectedServiceTime sets ExpectedServiceTime field to given value.

### HasExpectedServiceTime

`func (o *ReservationInfoType) HasExpectedServiceTime() bool`

HasExpectedServiceTime returns a boolean if a field has been set.

### GetGuestPreferredCurrency

`func (o *ReservationInfoType) GetGuestPreferredCurrency() string`

GetGuestPreferredCurrency returns the GuestPreferredCurrency field if non-nil, zero value otherwise.

### GetGuestPreferredCurrencyOk

`func (o *ReservationInfoType) GetGuestPreferredCurrencyOk() (*string, bool)`

GetGuestPreferredCurrencyOk returns a tuple with the GuestPreferredCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestPreferredCurrency

`func (o *ReservationInfoType) SetGuestPreferredCurrency(v string)`

SetGuestPreferredCurrency sets GuestPreferredCurrency field to given value.

### HasGuestPreferredCurrency

`func (o *ReservationInfoType) HasGuestPreferredCurrency() bool`

HasGuestPreferredCurrency returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelInterfaceStatusList

`func (o *ReservationInfoType) GetHotelInterfaceStatusList() []ReservationInterfaceStatusType`

GetHotelInterfaceStatusList returns the HotelInterfaceStatusList field if non-nil, zero value otherwise.

### GetHotelInterfaceStatusListOk

`func (o *ReservationInfoType) GetHotelInterfaceStatusListOk() (*[]ReservationInterfaceStatusType, bool)`

GetHotelInterfaceStatusListOk returns a tuple with the HotelInterfaceStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInterfaceStatusList

`func (o *ReservationInfoType) SetHotelInterfaceStatusList(v []ReservationInterfaceStatusType)`

SetHotelInterfaceStatusList sets HotelInterfaceStatusList field to given value.

### HasHotelInterfaceStatusList

`func (o *ReservationInfoType) HasHotelInterfaceStatusList() bool`

HasHotelInterfaceStatusList returns a boolean if a field has been set.

### GetHotelName

`func (o *ReservationInfoType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *ReservationInfoType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *ReservationInfoType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *ReservationInfoType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHousekeeping

`func (o *ReservationInfoType) GetHousekeeping() ResHousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *ReservationInfoType) GetHousekeepingOk() (*ResHousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *ReservationInfoType) SetHousekeeping(v ResHousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *ReservationInfoType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetKeyCount

`func (o *ReservationInfoType) GetKeyCount() int32`

GetKeyCount returns the KeyCount field if non-nil, zero value otherwise.

### GetKeyCountOk

`func (o *ReservationInfoType) GetKeyCountOk() (*int32, bool)`

GetKeyCountOk returns a tuple with the KeyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCount

`func (o *ReservationInfoType) SetKeyCount(v int32)`

SetKeyCount sets KeyCount field to given value.

### HasKeyCount

`func (o *ReservationInfoType) HasKeyCount() bool`

HasKeyCount returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ReservationInfoType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ReservationInfoType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ReservationInfoType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ReservationInfoType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ReservationInfoType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ReservationInfoType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ReservationInfoType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ReservationInfoType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastPrivacyPromptDate

`func (o *ReservationInfoType) GetLastPrivacyPromptDate() string`

GetLastPrivacyPromptDate returns the LastPrivacyPromptDate field if non-nil, zero value otherwise.

### GetLastPrivacyPromptDateOk

`func (o *ReservationInfoType) GetLastPrivacyPromptDateOk() (*string, bool)`

GetLastPrivacyPromptDateOk returns a tuple with the LastPrivacyPromptDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPrivacyPromptDate

`func (o *ReservationInfoType) SetLastPrivacyPromptDate(v string)`

SetLastPrivacyPromptDate sets LastPrivacyPromptDate field to given value.

### HasLastPrivacyPromptDate

`func (o *ReservationInfoType) HasLastPrivacyPromptDate() bool`

HasLastPrivacyPromptDate returns a boolean if a field has been set.

### GetMobileNotifications

`func (o *ReservationInfoType) GetMobileNotifications() ResMobileNotificationsType`

GetMobileNotifications returns the MobileNotifications field if non-nil, zero value otherwise.

### GetMobileNotificationsOk

`func (o *ReservationInfoType) GetMobileNotificationsOk() (*ResMobileNotificationsType, bool)`

GetMobileNotificationsOk returns a tuple with the MobileNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileNotifications

`func (o *ReservationInfoType) SetMobileNotifications(v ResMobileNotificationsType)`

SetMobileNotifications sets MobileNotifications field to given value.

### HasMobileNotifications

`func (o *ReservationInfoType) HasMobileNotifications() bool`

HasMobileNotifications returns a boolean if a field has been set.

### GetOpenFolio

`func (o *ReservationInfoType) GetOpenFolio() bool`

GetOpenFolio returns the OpenFolio field if non-nil, zero value otherwise.

### GetOpenFolioOk

`func (o *ReservationInfoType) GetOpenFolioOk() (*bool, bool)`

GetOpenFolioOk returns a tuple with the OpenFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenFolio

`func (o *ReservationInfoType) SetOpenFolio(v bool)`

SetOpenFolio sets OpenFolio field to given value.

### HasOpenFolio

`func (o *ReservationInfoType) HasOpenFolio() bool`

HasOpenFolio returns a boolean if a field has been set.

### GetOptedForCommunication

`func (o *ReservationInfoType) GetOptedForCommunication() bool`

GetOptedForCommunication returns the OptedForCommunication field if non-nil, zero value otherwise.

### GetOptedForCommunicationOk

`func (o *ReservationInfoType) GetOptedForCommunicationOk() (*bool, bool)`

GetOptedForCommunicationOk returns a tuple with the OptedForCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptedForCommunication

`func (o *ReservationInfoType) SetOptedForCommunication(v bool)`

SetOptedForCommunication sets OptedForCommunication field to given value.

### HasOptedForCommunication

`func (o *ReservationInfoType) HasOptedForCommunication() bool`

HasOptedForCommunication returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ReservationInfoType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ReservationInfoType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ReservationInfoType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ReservationInfoType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPreRegistered

`func (o *ReservationInfoType) GetPreRegistered() bool`

GetPreRegistered returns the PreRegistered field if non-nil, zero value otherwise.

### GetPreRegisteredOk

`func (o *ReservationInfoType) GetPreRegisteredOk() (*bool, bool)`

GetPreRegisteredOk returns a tuple with the PreRegistered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreRegistered

`func (o *ReservationInfoType) SetPreRegistered(v bool)`

SetPreRegistered sets PreRegistered field to given value.

### HasPreRegistered

`func (o *ReservationInfoType) HasPreRegistered() bool`

HasPreRegistered returns a boolean if a field has been set.

### GetPurgeDate

`func (o *ReservationInfoType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *ReservationInfoType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *ReservationInfoType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *ReservationInfoType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetQueue

`func (o *ReservationInfoType) GetQueue() ReservationQueueInformationType`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *ReservationInfoType) GetQueueOk() (*ReservationQueueInformationType, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *ReservationInfoType) SetQueue(v ReservationQueueInformationType)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *ReservationInfoType) HasQueue() bool`

HasQueue returns a boolean if a field has been set.

### GetReservationCommunication

`func (o *ReservationInfoType) GetReservationCommunication() ResCommunicationType`

GetReservationCommunication returns the ReservationCommunication field if non-nil, zero value otherwise.

### GetReservationCommunicationOk

`func (o *ReservationInfoType) GetReservationCommunicationOk() (*ResCommunicationType, bool)`

GetReservationCommunicationOk returns a tuple with the ReservationCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCommunication

`func (o *ReservationInfoType) SetReservationCommunication(v ResCommunicationType)`

SetReservationCommunication sets ReservationCommunication field to given value.

### HasReservationCommunication

`func (o *ReservationInfoType) HasReservationCommunication() bool`

HasReservationCommunication returns a boolean if a field has been set.

### GetReservationFolioWindows

`func (o *ReservationInfoType) GetReservationFolioWindows() []ReservationFolioWindowType`

GetReservationFolioWindows returns the ReservationFolioWindows field if non-nil, zero value otherwise.

### GetReservationFolioWindowsOk

`func (o *ReservationInfoType) GetReservationFolioWindowsOk() (*[]ReservationFolioWindowType, bool)`

GetReservationFolioWindowsOk returns a tuple with the ReservationFolioWindows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFolioWindows

`func (o *ReservationInfoType) SetReservationFolioWindows(v []ReservationFolioWindowType)`

SetReservationFolioWindows sets ReservationFolioWindows field to given value.

### HasReservationFolioWindows

`func (o *ReservationInfoType) HasReservationFolioWindows() bool`

HasReservationFolioWindows returns a boolean if a field has been set.

### GetReservationGuest

`func (o *ReservationInfoType) GetReservationGuest() ResGuestInfoType`

GetReservationGuest returns the ReservationGuest field if non-nil, zero value otherwise.

### GetReservationGuestOk

`func (o *ReservationInfoType) GetReservationGuestOk() (*ResGuestInfoType, bool)`

GetReservationGuestOk returns a tuple with the ReservationGuest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuest

`func (o *ReservationInfoType) SetReservationGuest(v ResGuestInfoType)`

SetReservationGuest sets ReservationGuest field to given value.

### HasReservationGuest

`func (o *ReservationInfoType) HasReservationGuest() bool`

HasReservationGuest returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationInfoType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationInfoType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationInfoType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationInfoType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationIndicators

`func (o *ReservationInfoType) GetReservationIndicators() []IndicatorType`

GetReservationIndicators returns the ReservationIndicators field if non-nil, zero value otherwise.

### GetReservationIndicatorsOk

`func (o *ReservationInfoType) GetReservationIndicatorsOk() (*[]IndicatorType, bool)`

GetReservationIndicatorsOk returns a tuple with the ReservationIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIndicators

`func (o *ReservationInfoType) SetReservationIndicators(v []IndicatorType)`

SetReservationIndicators sets ReservationIndicators field to given value.

### HasReservationIndicators

`func (o *ReservationInfoType) HasReservationIndicators() bool`

HasReservationIndicators returns a boolean if a field has been set.

### GetReservationPaymentMethod

`func (o *ReservationInfoType) GetReservationPaymentMethod() ReservationPaymentMethodType`

GetReservationPaymentMethod returns the ReservationPaymentMethod field if non-nil, zero value otherwise.

### GetReservationPaymentMethodOk

`func (o *ReservationInfoType) GetReservationPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodOk returns a tuple with the ReservationPaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethod

`func (o *ReservationInfoType) SetReservationPaymentMethod(v ReservationPaymentMethodType)`

SetReservationPaymentMethod sets ReservationPaymentMethod field to given value.

### HasReservationPaymentMethod

`func (o *ReservationInfoType) HasReservationPaymentMethod() bool`

HasReservationPaymentMethod returns a boolean if a field has been set.

### GetReservationStatus

`func (o *ReservationInfoType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *ReservationInfoType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *ReservationInfoType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *ReservationInfoType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRevenuesAndBalances

`func (o *ReservationInfoType) GetRevenuesAndBalances() ResRevenueBalanceType`

GetRevenuesAndBalances returns the RevenuesAndBalances field if non-nil, zero value otherwise.

### GetRevenuesAndBalancesOk

`func (o *ReservationInfoType) GetRevenuesAndBalancesOk() (*ResRevenueBalanceType, bool)`

GetRevenuesAndBalancesOk returns a tuple with the RevenuesAndBalances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenuesAndBalances

`func (o *ReservationInfoType) SetRevenuesAndBalances(v ResRevenueBalanceType)`

SetRevenuesAndBalances sets RevenuesAndBalances field to given value.

### HasRevenuesAndBalances

`func (o *ReservationInfoType) HasRevenuesAndBalances() bool`

HasRevenuesAndBalances returns a boolean if a field has been set.

### GetRoomStatus

`func (o *ReservationInfoType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *ReservationInfoType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *ReservationInfoType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *ReservationInfoType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetRoomStay

`func (o *ReservationInfoType) GetRoomStay() StayInfoType`

GetRoomStay returns the RoomStay field if non-nil, zero value otherwise.

### GetRoomStayOk

`func (o *ReservationInfoType) GetRoomStayOk() (*StayInfoType, bool)`

GetRoomStayOk returns a tuple with the RoomStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStay

`func (o *ReservationInfoType) SetRoomStay(v StayInfoType)`

SetRoomStay sets RoomStay field to given value.

### HasRoomStay

`func (o *ReservationInfoType) HasRoomStay() bool`

HasRoomStay returns a boolean if a field has been set.

### GetRoomStayReservation

`func (o *ReservationInfoType) GetRoomStayReservation() bool`

GetRoomStayReservation returns the RoomStayReservation field if non-nil, zero value otherwise.

### GetRoomStayReservationOk

`func (o *ReservationInfoType) GetRoomStayReservationOk() (*bool, bool)`

GetRoomStayReservationOk returns a tuple with the RoomStayReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStayReservation

`func (o *ReservationInfoType) SetRoomStayReservation(v bool)`

SetRoomStayReservation sets RoomStayReservation field to given value.

### HasRoomStayReservation

`func (o *ReservationInfoType) HasRoomStayReservation() bool`

HasRoomStayReservation returns a boolean if a field has been set.

### GetSearchMatches

`func (o *ReservationInfoType) GetSearchMatches() []SearchMatchType`

GetSearchMatches returns the SearchMatches field if non-nil, zero value otherwise.

### GetSearchMatchesOk

`func (o *ReservationInfoType) GetSearchMatchesOk() (*[]SearchMatchType, bool)`

GetSearchMatchesOk returns a tuple with the SearchMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchMatches

`func (o *ReservationInfoType) SetSearchMatches(v []SearchMatchType)`

SetSearchMatches sets SearchMatches field to given value.

### HasSearchMatches

`func (o *ReservationInfoType) HasSearchMatches() bool`

HasSearchMatches returns a boolean if a field has been set.

### GetSharedGuests

`func (o *ReservationInfoType) GetSharedGuests() []ResSharedGuestInfoType`

GetSharedGuests returns the SharedGuests field if non-nil, zero value otherwise.

### GetSharedGuestsOk

`func (o *ReservationInfoType) GetSharedGuestsOk() (*[]ResSharedGuestInfoType, bool)`

GetSharedGuestsOk returns a tuple with the SharedGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedGuests

`func (o *ReservationInfoType) SetSharedGuests(v []ResSharedGuestInfoType)`

SetSharedGuests sets SharedGuests field to given value.

### HasSharedGuests

`func (o *ReservationInfoType) HasSharedGuests() bool`

HasSharedGuests returns a boolean if a field has been set.

### GetSourceOfSale

`func (o *ReservationInfoType) GetSourceOfSale() SourceOfSaleType`

GetSourceOfSale returns the SourceOfSale field if non-nil, zero value otherwise.

### GetSourceOfSaleOk

`func (o *ReservationInfoType) GetSourceOfSaleOk() (*SourceOfSaleType, bool)`

GetSourceOfSaleOk returns a tuple with the SourceOfSale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfSale

`func (o *ReservationInfoType) SetSourceOfSale(v SourceOfSaleType)`

SetSourceOfSale sets SourceOfSale field to given value.

### HasSourceOfSale

`func (o *ReservationInfoType) HasSourceOfSale() bool`

HasSourceOfSale returns a boolean if a field has been set.

### GetSpecials

`func (o *ReservationInfoType) GetSpecials() string`

GetSpecials returns the Specials field if non-nil, zero value otherwise.

### GetSpecialsOk

`func (o *ReservationInfoType) GetSpecialsOk() (*string, bool)`

GetSpecialsOk returns a tuple with the Specials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecials

`func (o *ReservationInfoType) SetSpecials(v string)`

SetSpecials sets Specials field to given value.

### HasSpecials

`func (o *ReservationInfoType) HasSpecials() bool`

HasSpecials returns a boolean if a field has been set.

### GetTaxType

`func (o *ReservationInfoType) GetTaxType() TaxTypeType`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *ReservationInfoType) GetTaxTypeOk() (*TaxTypeType, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *ReservationInfoType) SetTaxType(v TaxTypeType)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *ReservationInfoType) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *ReservationInfoType) GetTurndownInfo() ReservationTurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *ReservationInfoType) GetTurndownInfoOk() (*ReservationTurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *ReservationInfoType) SetTurndownInfo(v ReservationTurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *ReservationInfoType) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.

### GetWaitlist

`func (o *ReservationInfoType) GetWaitlist() WaitlistResType`

GetWaitlist returns the Waitlist field if non-nil, zero value otherwise.

### GetWaitlistOk

`func (o *ReservationInfoType) GetWaitlistOk() (*WaitlistResType, bool)`

GetWaitlistOk returns a tuple with the Waitlist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlist

`func (o *ReservationInfoType) SetWaitlist(v WaitlistResType)`

SetWaitlist sets Waitlist field to given value.

### HasWaitlist

`func (o *ReservationInfoType) HasWaitlist() bool`

HasWaitlist returns a boolean if a field has been set.

### GetWalkInIndicator

`func (o *ReservationInfoType) GetWalkInIndicator() bool`

GetWalkInIndicator returns the WalkInIndicator field if non-nil, zero value otherwise.

### GetWalkInIndicatorOk

`func (o *ReservationInfoType) GetWalkInIndicatorOk() (*bool, bool)`

GetWalkInIndicatorOk returns a tuple with the WalkInIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalkInIndicator

`func (o *ReservationInfoType) SetWalkInIndicator(v bool)`

SetWalkInIndicator sets WalkInIndicator field to given value.

### HasWalkInIndicator

`func (o *ReservationInfoType) HasWalkInIndicator() bool`

HasWalkInIndicator returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *ReservationInfoType) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *ReservationInfoType) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *ReservationInfoType) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *ReservationInfoType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


