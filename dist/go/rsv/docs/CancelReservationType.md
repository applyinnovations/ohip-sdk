# CancelReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ExternalCancellationId** | Pointer to **string** | External cancellation number to be stored as cancellation number of the reservation. This is supported by postCancelShareReservation and postCancelReservation only. | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**RoomStay** | Pointer to [**StayInfoType**](StayInfoType.md) |  | [optional] 
**ReservationGuest** | Pointer to [**ResGuestInfoType**](ResGuestInfoType.md) |  | [optional] 
**SharedGuests** | Pointer to [**[]ResSharedGuestInfoType**](ResSharedGuestInfoType.md) | Collection of shared guest reservations. | [optional] 
**AttachedProfiles** | Pointer to [**[]ResAttachedProfileType**](ResAttachedProfileType.md) |  | [optional] 
**ReservationPaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**ReservationFolioWindows** | Pointer to [**[]ReservationFolioWindowType**](ReservationFolioWindowType.md) | Collection of reservation folio windows. | [optional] 
**Specials** | Pointer to **string** | Set of reservation preferences which belongs to the Specials group. | [optional] 
**LastPrivacyPromptDate** | Pointer to **string** | Last Privacy Prompt Date | [optional] 
**DisplayColor** | Pointer to **string** | Color setting of the reservation. | [optional] 
**ReservationIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**SearchMatches** | Pointer to [**[]SearchMatchType**](SearchMatchType.md) | List of Generic Name-Value-Pair Parameters used for super search matches. | [optional] 
**SourceOfSale** | Pointer to [**SourceOfSaleType**](SourceOfSaleType.md) |  | [optional] 
**Waitlist** | Pointer to [**WaitlistResType**](WaitlistResType.md) |  | [optional] 
**Queue** | Pointer to [**ReservationQueueInformationType**](ReservationQueueInformationType.md) |  | [optional] 
**Housekeeping** | Pointer to [**ResHousekeepingType**](ResHousekeepingType.md) |  | [optional] 
**Cashiering** | Pointer to [**ResCashieringType**](ResCashieringType.md) |  | [optional] 
**TaxType** | Pointer to [**TaxTypeType**](TaxTypeType.md) |  | [optional] 
**Deposit** | Pointer to [**ReservationDepositType**](ReservationDepositType.md) |  | [optional] 
**AllowedActions** | Pointer to [**[]ReservationAllowedActionType**](ReservationAllowedActionType.md) | Allowed action. | [optional] 
**RevenuesAndBalances** | Pointer to [**ResRevenueBalanceType**](ResRevenueBalanceType.md) |  | [optional] 
**HotelInterfaceStatusList** | Pointer to [**[]ReservationInterfaceStatusType**](ReservationInterfaceStatusType.md) | Collection of Hotel Interfaces and rights, this is populated only when fetching interface status for rooms. | [optional] 
**TurndownInfo** | Pointer to [**ReservationTurndownInfoType**](ReservationTurndownInfoType.md) |  | [optional] 
**MobileNotifications** | Pointer to [**ResMobileNotificationsType**](ResMobileNotificationsType.md) |  | [optional] 
**ReservationCommunication** | Pointer to [**ResCommunicationType**](ResCommunicationType.md) |  | [optional] 
**AdvanceCheckIn** | Pointer to [**AdvanceCheckInType**](AdvanceCheckInType.md) |  | [optional] 
**WelcomeOffer** | Pointer to **bool** | This flag will determine wheather the reservation is eligible for Welcome Offer or not. | [optional] 
**CancellationInfo** | Pointer to [**ReservationInfoTypeCancellationInfo**](ReservationInfoTypeCancellationInfo.md) |  | [optional] 
**KeyCount** | Pointer to **int32** | Number of keys created for the reservation. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**HotelName** | Pointer to **string** |  | [optional] 
**ExpectedServiceTime** | Pointer to **string** |  | [optional] 
**RoomStayReservation** | Pointer to **bool** | Boolean True if this reservation is reserving rooms. False if it is only reserving services. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**ComputedReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**WalkInIndicator** | Pointer to **bool** | When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in. | [optional] 
**AccessRestriction** | Pointer to [**ResAccessRestrictionType**](ResAccessRestrictionType.md) |  | [optional] 
**CommissionPayoutTo** | Pointer to [**CommissionPayoutToType**](CommissionPayoutToType.md) |  | [optional] 
**PaymentMethod** | Pointer to **string** | Payment Method. | [optional] 
**PreRegistered** | Pointer to **bool** | Defines if the reservation is pre-registered or not. | [optional] 
**OpenFolio** | Pointer to **bool** | Returns true when reservation has an open folio. | [optional] 
**AllowMobileCheckout** | Pointer to **bool** | Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false. | [optional] 
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**OptedForCommunication** | Pointer to **bool** | Attribute OptedForCommunication is set to true when the guest has opted for receiving communicationsl related to the reservation. | [optional] 
**CxlInstr** | Pointer to [**CancellationInstructionsType**](CancellationInstructionsType.md) |  | [optional] 
**RefResId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationLockHandle** | Pointer to **float32** |  | [optional] 
**OverrideExternalChecks** | Pointer to **bool** | This forcefully overrides the cancel operation on Reservation. For real-time CRS interface, it is used as cancellation override flag. | [optional] 

## Methods

### NewCancelReservationType

`func NewCancelReservationType() *CancelReservationType`

NewCancelReservationType instantiates a new CancelReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelReservationTypeWithDefaults

`func NewCancelReservationTypeWithDefaults() *CancelReservationType`

NewCancelReservationTypeWithDefaults instantiates a new CancelReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *CancelReservationType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *CancelReservationType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *CancelReservationType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *CancelReservationType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetExternalCancellationId

`func (o *CancelReservationType) GetExternalCancellationId() string`

GetExternalCancellationId returns the ExternalCancellationId field if non-nil, zero value otherwise.

### GetExternalCancellationIdOk

`func (o *CancelReservationType) GetExternalCancellationIdOk() (*string, bool)`

GetExternalCancellationIdOk returns a tuple with the ExternalCancellationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalCancellationId

`func (o *CancelReservationType) SetExternalCancellationId(v string)`

SetExternalCancellationId sets ExternalCancellationId field to given value.

### HasExternalCancellationId

`func (o *CancelReservationType) HasExternalCancellationId() bool`

HasExternalCancellationId returns a boolean if a field has been set.

### GetExternalReferences

`func (o *CancelReservationType) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *CancelReservationType) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *CancelReservationType) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *CancelReservationType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetRoomStay

`func (o *CancelReservationType) GetRoomStay() StayInfoType`

GetRoomStay returns the RoomStay field if non-nil, zero value otherwise.

### GetRoomStayOk

`func (o *CancelReservationType) GetRoomStayOk() (*StayInfoType, bool)`

GetRoomStayOk returns a tuple with the RoomStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStay

`func (o *CancelReservationType) SetRoomStay(v StayInfoType)`

SetRoomStay sets RoomStay field to given value.

### HasRoomStay

`func (o *CancelReservationType) HasRoomStay() bool`

HasRoomStay returns a boolean if a field has been set.

### GetReservationGuest

`func (o *CancelReservationType) GetReservationGuest() ResGuestInfoType`

GetReservationGuest returns the ReservationGuest field if non-nil, zero value otherwise.

### GetReservationGuestOk

`func (o *CancelReservationType) GetReservationGuestOk() (*ResGuestInfoType, bool)`

GetReservationGuestOk returns a tuple with the ReservationGuest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuest

`func (o *CancelReservationType) SetReservationGuest(v ResGuestInfoType)`

SetReservationGuest sets ReservationGuest field to given value.

### HasReservationGuest

`func (o *CancelReservationType) HasReservationGuest() bool`

HasReservationGuest returns a boolean if a field has been set.

### GetSharedGuests

`func (o *CancelReservationType) GetSharedGuests() []ResSharedGuestInfoType`

GetSharedGuests returns the SharedGuests field if non-nil, zero value otherwise.

### GetSharedGuestsOk

`func (o *CancelReservationType) GetSharedGuestsOk() (*[]ResSharedGuestInfoType, bool)`

GetSharedGuestsOk returns a tuple with the SharedGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedGuests

`func (o *CancelReservationType) SetSharedGuests(v []ResSharedGuestInfoType)`

SetSharedGuests sets SharedGuests field to given value.

### HasSharedGuests

`func (o *CancelReservationType) HasSharedGuests() bool`

HasSharedGuests returns a boolean if a field has been set.

### GetAttachedProfiles

`func (o *CancelReservationType) GetAttachedProfiles() []ResAttachedProfileType`

GetAttachedProfiles returns the AttachedProfiles field if non-nil, zero value otherwise.

### GetAttachedProfilesOk

`func (o *CancelReservationType) GetAttachedProfilesOk() (*[]ResAttachedProfileType, bool)`

GetAttachedProfilesOk returns a tuple with the AttachedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachedProfiles

`func (o *CancelReservationType) SetAttachedProfiles(v []ResAttachedProfileType)`

SetAttachedProfiles sets AttachedProfiles field to given value.

### HasAttachedProfiles

`func (o *CancelReservationType) HasAttachedProfiles() bool`

HasAttachedProfiles returns a boolean if a field has been set.

### GetReservationPaymentMethod

`func (o *CancelReservationType) GetReservationPaymentMethod() ReservationPaymentMethodType`

GetReservationPaymentMethod returns the ReservationPaymentMethod field if non-nil, zero value otherwise.

### GetReservationPaymentMethodOk

`func (o *CancelReservationType) GetReservationPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodOk returns a tuple with the ReservationPaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethod

`func (o *CancelReservationType) SetReservationPaymentMethod(v ReservationPaymentMethodType)`

SetReservationPaymentMethod sets ReservationPaymentMethod field to given value.

### HasReservationPaymentMethod

`func (o *CancelReservationType) HasReservationPaymentMethod() bool`

HasReservationPaymentMethod returns a boolean if a field has been set.

### GetReservationFolioWindows

`func (o *CancelReservationType) GetReservationFolioWindows() []ReservationFolioWindowType`

GetReservationFolioWindows returns the ReservationFolioWindows field if non-nil, zero value otherwise.

### GetReservationFolioWindowsOk

`func (o *CancelReservationType) GetReservationFolioWindowsOk() (*[]ReservationFolioWindowType, bool)`

GetReservationFolioWindowsOk returns a tuple with the ReservationFolioWindows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFolioWindows

`func (o *CancelReservationType) SetReservationFolioWindows(v []ReservationFolioWindowType)`

SetReservationFolioWindows sets ReservationFolioWindows field to given value.

### HasReservationFolioWindows

`func (o *CancelReservationType) HasReservationFolioWindows() bool`

HasReservationFolioWindows returns a boolean if a field has been set.

### GetSpecials

`func (o *CancelReservationType) GetSpecials() string`

GetSpecials returns the Specials field if non-nil, zero value otherwise.

### GetSpecialsOk

`func (o *CancelReservationType) GetSpecialsOk() (*string, bool)`

GetSpecialsOk returns a tuple with the Specials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecials

`func (o *CancelReservationType) SetSpecials(v string)`

SetSpecials sets Specials field to given value.

### HasSpecials

`func (o *CancelReservationType) HasSpecials() bool`

HasSpecials returns a boolean if a field has been set.

### GetLastPrivacyPromptDate

`func (o *CancelReservationType) GetLastPrivacyPromptDate() string`

GetLastPrivacyPromptDate returns the LastPrivacyPromptDate field if non-nil, zero value otherwise.

### GetLastPrivacyPromptDateOk

`func (o *CancelReservationType) GetLastPrivacyPromptDateOk() (*string, bool)`

GetLastPrivacyPromptDateOk returns a tuple with the LastPrivacyPromptDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPrivacyPromptDate

`func (o *CancelReservationType) SetLastPrivacyPromptDate(v string)`

SetLastPrivacyPromptDate sets LastPrivacyPromptDate field to given value.

### HasLastPrivacyPromptDate

`func (o *CancelReservationType) HasLastPrivacyPromptDate() bool`

HasLastPrivacyPromptDate returns a boolean if a field has been set.

### GetDisplayColor

`func (o *CancelReservationType) GetDisplayColor() string`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *CancelReservationType) GetDisplayColorOk() (*string, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *CancelReservationType) SetDisplayColor(v string)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *CancelReservationType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetReservationIndicators

`func (o *CancelReservationType) GetReservationIndicators() []IndicatorType`

GetReservationIndicators returns the ReservationIndicators field if non-nil, zero value otherwise.

### GetReservationIndicatorsOk

`func (o *CancelReservationType) GetReservationIndicatorsOk() (*[]IndicatorType, bool)`

GetReservationIndicatorsOk returns a tuple with the ReservationIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIndicators

`func (o *CancelReservationType) SetReservationIndicators(v []IndicatorType)`

SetReservationIndicators sets ReservationIndicators field to given value.

### HasReservationIndicators

`func (o *CancelReservationType) HasReservationIndicators() bool`

HasReservationIndicators returns a boolean if a field has been set.

### GetRoomStatus

`func (o *CancelReservationType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *CancelReservationType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *CancelReservationType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *CancelReservationType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetSearchMatches

`func (o *CancelReservationType) GetSearchMatches() []SearchMatchType`

GetSearchMatches returns the SearchMatches field if non-nil, zero value otherwise.

### GetSearchMatchesOk

`func (o *CancelReservationType) GetSearchMatchesOk() (*[]SearchMatchType, bool)`

GetSearchMatchesOk returns a tuple with the SearchMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchMatches

`func (o *CancelReservationType) SetSearchMatches(v []SearchMatchType)`

SetSearchMatches sets SearchMatches field to given value.

### HasSearchMatches

`func (o *CancelReservationType) HasSearchMatches() bool`

HasSearchMatches returns a boolean if a field has been set.

### GetSourceOfSale

`func (o *CancelReservationType) GetSourceOfSale() SourceOfSaleType`

GetSourceOfSale returns the SourceOfSale field if non-nil, zero value otherwise.

### GetSourceOfSaleOk

`func (o *CancelReservationType) GetSourceOfSaleOk() (*SourceOfSaleType, bool)`

GetSourceOfSaleOk returns a tuple with the SourceOfSale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfSale

`func (o *CancelReservationType) SetSourceOfSale(v SourceOfSaleType)`

SetSourceOfSale sets SourceOfSale field to given value.

### HasSourceOfSale

`func (o *CancelReservationType) HasSourceOfSale() bool`

HasSourceOfSale returns a boolean if a field has been set.

### GetWaitlist

`func (o *CancelReservationType) GetWaitlist() WaitlistResType`

GetWaitlist returns the Waitlist field if non-nil, zero value otherwise.

### GetWaitlistOk

`func (o *CancelReservationType) GetWaitlistOk() (*WaitlistResType, bool)`

GetWaitlistOk returns a tuple with the Waitlist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlist

`func (o *CancelReservationType) SetWaitlist(v WaitlistResType)`

SetWaitlist sets Waitlist field to given value.

### HasWaitlist

`func (o *CancelReservationType) HasWaitlist() bool`

HasWaitlist returns a boolean if a field has been set.

### GetQueue

`func (o *CancelReservationType) GetQueue() ReservationQueueInformationType`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *CancelReservationType) GetQueueOk() (*ReservationQueueInformationType, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *CancelReservationType) SetQueue(v ReservationQueueInformationType)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *CancelReservationType) HasQueue() bool`

HasQueue returns a boolean if a field has been set.

### GetHousekeeping

`func (o *CancelReservationType) GetHousekeeping() ResHousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *CancelReservationType) GetHousekeepingOk() (*ResHousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *CancelReservationType) SetHousekeeping(v ResHousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *CancelReservationType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetCashiering

`func (o *CancelReservationType) GetCashiering() ResCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *CancelReservationType) GetCashieringOk() (*ResCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *CancelReservationType) SetCashiering(v ResCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *CancelReservationType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetTaxType

`func (o *CancelReservationType) GetTaxType() TaxTypeType`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *CancelReservationType) GetTaxTypeOk() (*TaxTypeType, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *CancelReservationType) SetTaxType(v TaxTypeType)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *CancelReservationType) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetDeposit

`func (o *CancelReservationType) GetDeposit() ReservationDepositType`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *CancelReservationType) GetDepositOk() (*ReservationDepositType, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *CancelReservationType) SetDeposit(v ReservationDepositType)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *CancelReservationType) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetAllowedActions

`func (o *CancelReservationType) GetAllowedActions() []ReservationAllowedActionType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *CancelReservationType) GetAllowedActionsOk() (*[]ReservationAllowedActionType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *CancelReservationType) SetAllowedActions(v []ReservationAllowedActionType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *CancelReservationType) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetRevenuesAndBalances

`func (o *CancelReservationType) GetRevenuesAndBalances() ResRevenueBalanceType`

GetRevenuesAndBalances returns the RevenuesAndBalances field if non-nil, zero value otherwise.

### GetRevenuesAndBalancesOk

`func (o *CancelReservationType) GetRevenuesAndBalancesOk() (*ResRevenueBalanceType, bool)`

GetRevenuesAndBalancesOk returns a tuple with the RevenuesAndBalances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenuesAndBalances

`func (o *CancelReservationType) SetRevenuesAndBalances(v ResRevenueBalanceType)`

SetRevenuesAndBalances sets RevenuesAndBalances field to given value.

### HasRevenuesAndBalances

`func (o *CancelReservationType) HasRevenuesAndBalances() bool`

HasRevenuesAndBalances returns a boolean if a field has been set.

### GetHotelInterfaceStatusList

`func (o *CancelReservationType) GetHotelInterfaceStatusList() []ReservationInterfaceStatusType`

GetHotelInterfaceStatusList returns the HotelInterfaceStatusList field if non-nil, zero value otherwise.

### GetHotelInterfaceStatusListOk

`func (o *CancelReservationType) GetHotelInterfaceStatusListOk() (*[]ReservationInterfaceStatusType, bool)`

GetHotelInterfaceStatusListOk returns a tuple with the HotelInterfaceStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInterfaceStatusList

`func (o *CancelReservationType) SetHotelInterfaceStatusList(v []ReservationInterfaceStatusType)`

SetHotelInterfaceStatusList sets HotelInterfaceStatusList field to given value.

### HasHotelInterfaceStatusList

`func (o *CancelReservationType) HasHotelInterfaceStatusList() bool`

HasHotelInterfaceStatusList returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *CancelReservationType) GetTurndownInfo() ReservationTurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *CancelReservationType) GetTurndownInfoOk() (*ReservationTurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *CancelReservationType) SetTurndownInfo(v ReservationTurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *CancelReservationType) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.

### GetMobileNotifications

`func (o *CancelReservationType) GetMobileNotifications() ResMobileNotificationsType`

GetMobileNotifications returns the MobileNotifications field if non-nil, zero value otherwise.

### GetMobileNotificationsOk

`func (o *CancelReservationType) GetMobileNotificationsOk() (*ResMobileNotificationsType, bool)`

GetMobileNotificationsOk returns a tuple with the MobileNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileNotifications

`func (o *CancelReservationType) SetMobileNotifications(v ResMobileNotificationsType)`

SetMobileNotifications sets MobileNotifications field to given value.

### HasMobileNotifications

`func (o *CancelReservationType) HasMobileNotifications() bool`

HasMobileNotifications returns a boolean if a field has been set.

### GetReservationCommunication

`func (o *CancelReservationType) GetReservationCommunication() ResCommunicationType`

GetReservationCommunication returns the ReservationCommunication field if non-nil, zero value otherwise.

### GetReservationCommunicationOk

`func (o *CancelReservationType) GetReservationCommunicationOk() (*ResCommunicationType, bool)`

GetReservationCommunicationOk returns a tuple with the ReservationCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCommunication

`func (o *CancelReservationType) SetReservationCommunication(v ResCommunicationType)`

SetReservationCommunication sets ReservationCommunication field to given value.

### HasReservationCommunication

`func (o *CancelReservationType) HasReservationCommunication() bool`

HasReservationCommunication returns a boolean if a field has been set.

### GetAdvanceCheckIn

`func (o *CancelReservationType) GetAdvanceCheckIn() AdvanceCheckInType`

GetAdvanceCheckIn returns the AdvanceCheckIn field if non-nil, zero value otherwise.

### GetAdvanceCheckInOk

`func (o *CancelReservationType) GetAdvanceCheckInOk() (*AdvanceCheckInType, bool)`

GetAdvanceCheckInOk returns a tuple with the AdvanceCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckIn

`func (o *CancelReservationType) SetAdvanceCheckIn(v AdvanceCheckInType)`

SetAdvanceCheckIn sets AdvanceCheckIn field to given value.

### HasAdvanceCheckIn

`func (o *CancelReservationType) HasAdvanceCheckIn() bool`

HasAdvanceCheckIn returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *CancelReservationType) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *CancelReservationType) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *CancelReservationType) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *CancelReservationType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.

### GetCancellationInfo

`func (o *CancelReservationType) GetCancellationInfo() ReservationInfoTypeCancellationInfo`

GetCancellationInfo returns the CancellationInfo field if non-nil, zero value otherwise.

### GetCancellationInfoOk

`func (o *CancelReservationType) GetCancellationInfoOk() (*ReservationInfoTypeCancellationInfo, bool)`

GetCancellationInfoOk returns a tuple with the CancellationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationInfo

`func (o *CancelReservationType) SetCancellationInfo(v ReservationInfoTypeCancellationInfo)`

SetCancellationInfo sets CancellationInfo field to given value.

### HasCancellationInfo

`func (o *CancelReservationType) HasCancellationInfo() bool`

HasCancellationInfo returns a boolean if a field has been set.

### GetKeyCount

`func (o *CancelReservationType) GetKeyCount() int32`

GetKeyCount returns the KeyCount field if non-nil, zero value otherwise.

### GetKeyCountOk

`func (o *CancelReservationType) GetKeyCountOk() (*int32, bool)`

GetKeyCountOk returns a tuple with the KeyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCount

`func (o *CancelReservationType) SetKeyCount(v int32)`

SetKeyCount sets KeyCount field to given value.

### HasKeyCount

`func (o *CancelReservationType) HasKeyCount() bool`

HasKeyCount returns a boolean if a field has been set.

### GetHotelId

`func (o *CancelReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CancelReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CancelReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CancelReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *CancelReservationType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *CancelReservationType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *CancelReservationType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *CancelReservationType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetExpectedServiceTime

`func (o *CancelReservationType) GetExpectedServiceTime() string`

GetExpectedServiceTime returns the ExpectedServiceTime field if non-nil, zero value otherwise.

### GetExpectedServiceTimeOk

`func (o *CancelReservationType) GetExpectedServiceTimeOk() (*string, bool)`

GetExpectedServiceTimeOk returns a tuple with the ExpectedServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedServiceTime

`func (o *CancelReservationType) SetExpectedServiceTime(v string)`

SetExpectedServiceTime sets ExpectedServiceTime field to given value.

### HasExpectedServiceTime

`func (o *CancelReservationType) HasExpectedServiceTime() bool`

HasExpectedServiceTime returns a boolean if a field has been set.

### GetRoomStayReservation

`func (o *CancelReservationType) GetRoomStayReservation() bool`

GetRoomStayReservation returns the RoomStayReservation field if non-nil, zero value otherwise.

### GetRoomStayReservationOk

`func (o *CancelReservationType) GetRoomStayReservationOk() (*bool, bool)`

GetRoomStayReservationOk returns a tuple with the RoomStayReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStayReservation

`func (o *CancelReservationType) SetRoomStayReservation(v bool)`

SetRoomStayReservation sets RoomStayReservation field to given value.

### HasRoomStayReservation

`func (o *CancelReservationType) HasRoomStayReservation() bool`

HasRoomStayReservation returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *CancelReservationType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *CancelReservationType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *CancelReservationType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *CancelReservationType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *CancelReservationType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *CancelReservationType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *CancelReservationType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *CancelReservationType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *CancelReservationType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *CancelReservationType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *CancelReservationType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *CancelReservationType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *CancelReservationType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *CancelReservationType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *CancelReservationType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *CancelReservationType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *CancelReservationType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *CancelReservationType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *CancelReservationType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *CancelReservationType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetReservationStatus

`func (o *CancelReservationType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *CancelReservationType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *CancelReservationType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *CancelReservationType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *CancelReservationType) GetComputedReservationStatus() PMSResStatusType`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *CancelReservationType) GetComputedReservationStatusOk() (*PMSResStatusType, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *CancelReservationType) SetComputedReservationStatus(v PMSResStatusType)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *CancelReservationType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.

### GetWalkInIndicator

`func (o *CancelReservationType) GetWalkInIndicator() bool`

GetWalkInIndicator returns the WalkInIndicator field if non-nil, zero value otherwise.

### GetWalkInIndicatorOk

`func (o *CancelReservationType) GetWalkInIndicatorOk() (*bool, bool)`

GetWalkInIndicatorOk returns a tuple with the WalkInIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalkInIndicator

`func (o *CancelReservationType) SetWalkInIndicator(v bool)`

SetWalkInIndicator sets WalkInIndicator field to given value.

### HasWalkInIndicator

`func (o *CancelReservationType) HasWalkInIndicator() bool`

HasWalkInIndicator returns a boolean if a field has been set.

### GetAccessRestriction

`func (o *CancelReservationType) GetAccessRestriction() ResAccessRestrictionType`

GetAccessRestriction returns the AccessRestriction field if non-nil, zero value otherwise.

### GetAccessRestrictionOk

`func (o *CancelReservationType) GetAccessRestrictionOk() (*ResAccessRestrictionType, bool)`

GetAccessRestrictionOk returns a tuple with the AccessRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestriction

`func (o *CancelReservationType) SetAccessRestriction(v ResAccessRestrictionType)`

SetAccessRestriction sets AccessRestriction field to given value.

### HasAccessRestriction

`func (o *CancelReservationType) HasAccessRestriction() bool`

HasAccessRestriction returns a boolean if a field has been set.

### GetCommissionPayoutTo

`func (o *CancelReservationType) GetCommissionPayoutTo() CommissionPayoutToType`

GetCommissionPayoutTo returns the CommissionPayoutTo field if non-nil, zero value otherwise.

### GetCommissionPayoutToOk

`func (o *CancelReservationType) GetCommissionPayoutToOk() (*CommissionPayoutToType, bool)`

GetCommissionPayoutToOk returns a tuple with the CommissionPayoutTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPayoutTo

`func (o *CancelReservationType) SetCommissionPayoutTo(v CommissionPayoutToType)`

SetCommissionPayoutTo sets CommissionPayoutTo field to given value.

### HasCommissionPayoutTo

`func (o *CancelReservationType) HasCommissionPayoutTo() bool`

HasCommissionPayoutTo returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *CancelReservationType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *CancelReservationType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *CancelReservationType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *CancelReservationType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPreRegistered

`func (o *CancelReservationType) GetPreRegistered() bool`

GetPreRegistered returns the PreRegistered field if non-nil, zero value otherwise.

### GetPreRegisteredOk

`func (o *CancelReservationType) GetPreRegisteredOk() (*bool, bool)`

GetPreRegisteredOk returns a tuple with the PreRegistered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreRegistered

`func (o *CancelReservationType) SetPreRegistered(v bool)`

SetPreRegistered sets PreRegistered field to given value.

### HasPreRegistered

`func (o *CancelReservationType) HasPreRegistered() bool`

HasPreRegistered returns a boolean if a field has been set.

### GetOpenFolio

`func (o *CancelReservationType) GetOpenFolio() bool`

GetOpenFolio returns the OpenFolio field if non-nil, zero value otherwise.

### GetOpenFolioOk

`func (o *CancelReservationType) GetOpenFolioOk() (*bool, bool)`

GetOpenFolioOk returns a tuple with the OpenFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenFolio

`func (o *CancelReservationType) SetOpenFolio(v bool)`

SetOpenFolio sets OpenFolio field to given value.

### HasOpenFolio

`func (o *CancelReservationType) HasOpenFolio() bool`

HasOpenFolio returns a boolean if a field has been set.

### GetAllowMobileCheckout

`func (o *CancelReservationType) GetAllowMobileCheckout() bool`

GetAllowMobileCheckout returns the AllowMobileCheckout field if non-nil, zero value otherwise.

### GetAllowMobileCheckoutOk

`func (o *CancelReservationType) GetAllowMobileCheckoutOk() (*bool, bool)`

GetAllowMobileCheckoutOk returns a tuple with the AllowMobileCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileCheckout

`func (o *CancelReservationType) SetAllowMobileCheckout(v bool)`

SetAllowMobileCheckout sets AllowMobileCheckout field to given value.

### HasAllowMobileCheckout

`func (o *CancelReservationType) HasAllowMobileCheckout() bool`

HasAllowMobileCheckout returns a boolean if a field has been set.

### GetAllowMobileViewFolio

`func (o *CancelReservationType) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *CancelReservationType) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *CancelReservationType) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *CancelReservationType) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetOptedForCommunication

`func (o *CancelReservationType) GetOptedForCommunication() bool`

GetOptedForCommunication returns the OptedForCommunication field if non-nil, zero value otherwise.

### GetOptedForCommunicationOk

`func (o *CancelReservationType) GetOptedForCommunicationOk() (*bool, bool)`

GetOptedForCommunicationOk returns a tuple with the OptedForCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptedForCommunication

`func (o *CancelReservationType) SetOptedForCommunication(v bool)`

SetOptedForCommunication sets OptedForCommunication field to given value.

### HasOptedForCommunication

`func (o *CancelReservationType) HasOptedForCommunication() bool`

HasOptedForCommunication returns a boolean if a field has been set.

### GetCxlInstr

`func (o *CancelReservationType) GetCxlInstr() CancellationInstructionsType`

GetCxlInstr returns the CxlInstr field if non-nil, zero value otherwise.

### GetCxlInstrOk

`func (o *CancelReservationType) GetCxlInstrOk() (*CancellationInstructionsType, bool)`

GetCxlInstrOk returns a tuple with the CxlInstr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCxlInstr

`func (o *CancelReservationType) SetCxlInstr(v CancellationInstructionsType)`

SetCxlInstr sets CxlInstr field to given value.

### HasCxlInstr

`func (o *CancelReservationType) HasCxlInstr() bool`

HasCxlInstr returns a boolean if a field has been set.

### GetRefResId

`func (o *CancelReservationType) GetRefResId() UniqueIDType`

GetRefResId returns the RefResId field if non-nil, zero value otherwise.

### GetRefResIdOk

`func (o *CancelReservationType) GetRefResIdOk() (*UniqueIDType, bool)`

GetRefResIdOk returns a tuple with the RefResId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefResId

`func (o *CancelReservationType) SetRefResId(v UniqueIDType)`

SetRefResId sets RefResId field to given value.

### HasRefResId

`func (o *CancelReservationType) HasRefResId() bool`

HasRefResId returns a boolean if a field has been set.

### GetReservationLockHandle

`func (o *CancelReservationType) GetReservationLockHandle() float32`

GetReservationLockHandle returns the ReservationLockHandle field if non-nil, zero value otherwise.

### GetReservationLockHandleOk

`func (o *CancelReservationType) GetReservationLockHandleOk() (*float32, bool)`

GetReservationLockHandleOk returns a tuple with the ReservationLockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationLockHandle

`func (o *CancelReservationType) SetReservationLockHandle(v float32)`

SetReservationLockHandle sets ReservationLockHandle field to given value.

### HasReservationLockHandle

`func (o *CancelReservationType) HasReservationLockHandle() bool`

HasReservationLockHandle returns a boolean if a field has been set.

### GetOverrideExternalChecks

`func (o *CancelReservationType) GetOverrideExternalChecks() bool`

GetOverrideExternalChecks returns the OverrideExternalChecks field if non-nil, zero value otherwise.

### GetOverrideExternalChecksOk

`func (o *CancelReservationType) GetOverrideExternalChecksOk() (*bool, bool)`

GetOverrideExternalChecksOk returns a tuple with the OverrideExternalChecks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideExternalChecks

`func (o *CancelReservationType) SetOverrideExternalChecks(v bool)`

SetOverrideExternalChecks sets OverrideExternalChecks field to given value.

### HasOverrideExternalChecks

`func (o *CancelReservationType) HasOverrideExternalChecks() bool`

HasOverrideExternalChecks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


