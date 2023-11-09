# HotelReservationInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRestriction** | Pointer to [**ResAccessRestrictionType**](ResAccessRestrictionType.md) |  | [optional] 
**AccessRestrictionMessage** | Pointer to **string** | Configurable Access Restriction Message for Excluded Block or Rate Code. | [optional] 
**AdditionalGuestInfo** | Pointer to [**ResGuestAdditionalInfoType**](ResGuestAdditionalInfoType.md) |  | [optional] 
**AdvanceCheckIn** | Pointer to [**AdvanceCheckInType**](AdvanceCheckInType.md) |  | [optional] 
**Alerts** | Pointer to [**AlertsType**](AlertsType.md) |  | [optional] 
**AllowAutoCheckin** | Pointer to **bool** | Flag to allow auto checkin | [optional] 
**AllowMobileCheckout** | Pointer to **bool** | Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false. | [optional] 
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**AllowPreRegistration** | Pointer to **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device . Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | [optional] 
**AllowedActions** | Pointer to [**ReservationAllowedActionsType**](ReservationAllowedActionsType.md) |  | [optional] 
**AssociatedReservations** | Pointer to **map[string]interface{}** | Information regarding associated reservations to the reservation. | [optional] 
**Attachments** | Pointer to [**AttachmentsType**](AttachmentsType.md) |  | [optional] 
**AutoBorrowFromHouse** | Pointer to **bool** | This flag will force to borrow from house if borrow required for number of rooms requested, this will only applicable when reservation is attached to a Block. | [optional] 
**CallHistory** | Pointer to [**CallHistoryType**](CallHistoryType.md) |  | [optional] 
**Cancellation** | Pointer to [**HotelReservationInstructionTypeCancellation**](HotelReservationInstructionTypeCancellation.md) |  | [optional] 
**Cashiering** | Pointer to [**ResCashieringType**](ResCashieringType.md) |  | [optional] 
**Catering** | Pointer to [**CateringResInfoType**](CateringResInfoType.md) |  | [optional] 
**ChangeInstrunctions** | Pointer to [**ChangeInstructionType**](ChangeInstructionType.md) |  | [optional] 
**ChargeCardNumber** | Pointer to **string** | This attribute represents Hotel charge card number. This number is generated automatically in OPERA when a reservation is created in OPERA. It is part of a functionality that provide the guest with the convenience of placing all their charges directly on their reservation folio. | [optional] 
**Comments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the reservation. | [optional] 
**CompAuthorizer** | Pointer to [**CompAuthorizerInfoType**](CompAuthorizerInfoType.md) |  | [optional] 
**ComputedReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**ConfirmationLetters** | Pointer to [**ConfirmationsType**](ConfirmationsType.md) |  | [optional] 
**CreateBusinessDate** | Pointer to **string** | Business Date when the reservation was created. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**CustomChargeExemptionDetails** | Pointer to [**CustomChargeExemptionsType**](CustomChargeExemptionsType.md) |  | [optional] 
**CustomNameValueDetail** | Pointer to [**NameValueDetailType**](NameValueDetailType.md) |  | [optional] 
**CustomReference** | Pointer to **string** | Custom Reference to identify reservation. | [optional] 
**DisplayColor** | Pointer to **string** | The color to display this reservation on room grid displays. | [optional] 
**ECertificates** | Pointer to [**ReservationECertificatesType**](ReservationECertificatesType.md) |  | [optional] 
**ECoupons** | Pointer to [**ECouponsType**](ECouponsType.md) |  | [optional] 
**ExtSystemSync** | Pointer to **bool** |  | [optional] 
**ExternalReferences** | Pointer to [**ExternalReferencesType**](ExternalReferencesType.md) |  | [optional] 
**FixedCharges** | Pointer to [**FixedChargesType**](FixedChargesType.md) |  | [optional] 
**Folios** | Pointer to [**FoliosShortInfoType**](FoliosShortInfoType.md) |  | [optional] 
**GuestComments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the profile. | [optional] 
**GuestMemberships** | Pointer to [**[]MembershipType**](MembershipType.md) | List of Memberships for the Guest related to the reservation. | [optional] 
**GuestMessages** | Pointer to [**GuestMessagesType**](GuestMessagesType.md) |  | [optional] 
**HasOpenFolio** | Pointer to **bool** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**Housekeeping** | Pointer to [**ResHousekeepingType**](ResHousekeepingType.md) |  | [optional] 
**InventoryItems** | Pointer to [**ResInventoryItemsType**](ResInventoryItemsType.md) |  | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LinkedReservation** | Pointer to [**LinkedReservationsInfoType**](LinkedReservationsInfoType.md) |  | [optional] 
**Locators** | Pointer to [**ReservationLocatorsType**](ReservationLocatorsType.md) |  | [optional] 
**LockHandle** | Pointer to **float32** | An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid. | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this reservation as recently accessed. | [optional] 
**OptedForCommunication** | Pointer to **bool** | Flag containing true or false value to determine if the guest has opted for communications pertaining to this reservation.Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is marked for communication. Upon fetch, the current state of the flag will show true or false. | [optional] 
**OverrideBlockRestriction** | Pointer to **bool** |  | [optional] 
**OverrideExternalChecks** | Pointer to **bool** | Forcefully override the create/update action on the Reservation. For real-time CRS interfaces, this element is used as force selling indicator in case of Create or Update Reservation | [optional] 
**OverrideInstructions** | Pointer to [**OverrideInstructionsType**](OverrideInstructionsType.md) |  | [optional] 
**OverrideInventoryCheck** | Pointer to **bool** | Indicates to Override the Room Inventory Check if applicable. | [optional] 
**OverrideOutOfServiceCheck** | Pointer to **bool** | Indicates to Override the Room Out Of Service Check if applicable. | [optional] 
**OverrideRoomOwnership** | Pointer to **bool** | Override the room ownership of the room currently assigned to this reservation. This is applicable when Room Rotation OPERA Control is active. | [optional] [default to true]
**OverrideRotationRoom** | Pointer to **bool** | Override the rotation room that is next in the sequence with the room currently assigned to this reservation. This is applicable when Room Rotation OPERA Control is active. | [optional] [default to true]
**Party** | Pointer to **string** | Party/PartyCode when reservation is part of a party(a small group). | [optional] 
**PreRegistered** | Pointer to **bool** | Is the reservation pre-registered. | [optional] 
**PreferenceCollection** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Collection of reservation preferences. | [optional] 
**PrepaidCards** | Pointer to [**PrepaidCardsType**](PrepaidCardsType.md) |  | [optional] 
**PrimaryEnrollmentChain** | Pointer to **string** | Name of the Chain for the primary enrollment | [optional] 
**PrimaryEnrollmentResort** | Pointer to **string** | Name Of the Resort/Hotel for the primary enrollment | [optional] 
**PrintRate** | Pointer to **bool** | Indicates whether to show the rate or not on a printed document which includes the rate. | [optional] 
**ProfileAwards** | Pointer to [**AwardsType**](AwardsType.md) |  | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Queue** | Pointer to [**ReservationQueueInformationType**](ReservationQueueInformationType.md) |  | [optional] 
**ReinstateDate** | Pointer to **string** | Business Date when the reservation was last reinstated. | [optional] 
**ReservationActivities** | Pointer to [**ActivityLookUpList**](ActivityLookUpList.md) |  | [optional] 
**ReservationAwards** | Pointer to [**AwardsType**](AwardsType.md) |  | [optional] 
**ReservationCommunication** | Pointer to [**ResCommunicationType**](ResCommunicationType.md) |  | [optional] 
**ReservationGuests** | Pointer to [**[]ResGuestType**](ResGuestType.md) | Collection of guests associated with the reservation. | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**ReservationIndicators** | Pointer to [**IndicatorsType**](IndicatorsType.md) |  | [optional] 
**ReservationMemberships** | Pointer to [**[]ReservationMembershipType**](ReservationMembershipType.md) | List of reservation memberships. | [optional] 
**ReservationPackages** | Pointer to [**[]ReservationPackageType**](ReservationPackageType.md) | A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges. | [optional] 
**ReservationPaymentMethods** | Pointer to [**ReservationPaymentMethodsType**](ReservationPaymentMethodsType.md) |  | [optional] 
**ReservationPolicies** | Pointer to [**ReservationPoliciesType**](ReservationPoliciesType.md) |  | [optional] 
**ReservationProfiles** | Pointer to [**HotelReservationInstructionTypeReservationProfiles**](HotelReservationInstructionTypeReservationProfiles.md) |  | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**ResponseInstructions** | Pointer to [**HotelReservationInstructionTypeResponseInstructions**](HotelReservationInstructionTypeResponseInstructions.md) |  | [optional] 
**RoomStay** | Pointer to [**RoomStayType**](RoomStayType.md) |  | [optional] 
**RoomStayReservation** | Pointer to **bool** | Boolean True if this reservation is reserving rooms. False if it is only reserving services. | [optional] 
**RoutingInstructions** | Pointer to [**RoutingInfoListType**](RoutingInfoListType.md) |  | [optional] 
**ScheduledActivities** | Pointer to [**ActivityLookUpList**](ActivityLookUpList.md) |  | [optional] 
**ServiceRequests** | Pointer to [**ServiceRequests**](ServiceRequests.md) |  | [optional] 
**SharedGuests** | Pointer to [**ResSharedGuestListType**](ResSharedGuestListType.md) |  | [optional] 
**Shares** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**SourceOfSale** | Pointer to [**SourceOfSaleType**](SourceOfSaleType.md) |  | [optional] 
**StatisticalClassification** | Pointer to [**ResStatClassificationType**](ResStatClassificationType.md) |  | [optional] 
**Tickets** | Pointer to [**TicketsType**](TicketsType.md) |  | [optional] 
**Traces** | Pointer to [**HotelReservationTracesType**](HotelReservationTracesType.md) |  | [optional] 
**TrackItItems** | Pointer to [**TrackItItemsType**](TrackItItemsType.md) |  | [optional] 
**TransactionDiversions** | Pointer to [**HotelReservationInstructionTypeTransactionDiversions**](HotelReservationInstructionTypeTransactionDiversions.md) |  | [optional] 
**UpgradeEligible** | Pointer to **bool** | Indicates whether the reservation is eligible for upgrade. | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**Waitlist** | Pointer to [**WaitlistResType**](WaitlistResType.md) |  | [optional] 
**WalkIn** | Pointer to **bool** | When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in. | [optional] 
**WebRegistrationCards** | Pointer to [**AttachmentsType**](AttachmentsType.md) |  | [optional] 

## Methods

### NewHotelReservationInstructionType

`func NewHotelReservationInstructionType() *HotelReservationInstructionType`

NewHotelReservationInstructionType instantiates a new HotelReservationInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelReservationInstructionTypeWithDefaults

`func NewHotelReservationInstructionTypeWithDefaults() *HotelReservationInstructionType`

NewHotelReservationInstructionTypeWithDefaults instantiates a new HotelReservationInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRestriction

`func (o *HotelReservationInstructionType) GetAccessRestriction() ResAccessRestrictionType`

GetAccessRestriction returns the AccessRestriction field if non-nil, zero value otherwise.

### GetAccessRestrictionOk

`func (o *HotelReservationInstructionType) GetAccessRestrictionOk() (*ResAccessRestrictionType, bool)`

GetAccessRestrictionOk returns a tuple with the AccessRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestriction

`func (o *HotelReservationInstructionType) SetAccessRestriction(v ResAccessRestrictionType)`

SetAccessRestriction sets AccessRestriction field to given value.

### HasAccessRestriction

`func (o *HotelReservationInstructionType) HasAccessRestriction() bool`

HasAccessRestriction returns a boolean if a field has been set.

### GetAccessRestrictionMessage

`func (o *HotelReservationInstructionType) GetAccessRestrictionMessage() string`

GetAccessRestrictionMessage returns the AccessRestrictionMessage field if non-nil, zero value otherwise.

### GetAccessRestrictionMessageOk

`func (o *HotelReservationInstructionType) GetAccessRestrictionMessageOk() (*string, bool)`

GetAccessRestrictionMessageOk returns a tuple with the AccessRestrictionMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestrictionMessage

`func (o *HotelReservationInstructionType) SetAccessRestrictionMessage(v string)`

SetAccessRestrictionMessage sets AccessRestrictionMessage field to given value.

### HasAccessRestrictionMessage

`func (o *HotelReservationInstructionType) HasAccessRestrictionMessage() bool`

HasAccessRestrictionMessage returns a boolean if a field has been set.

### GetAdditionalGuestInfo

`func (o *HotelReservationInstructionType) GetAdditionalGuestInfo() ResGuestAdditionalInfoType`

GetAdditionalGuestInfo returns the AdditionalGuestInfo field if non-nil, zero value otherwise.

### GetAdditionalGuestInfoOk

`func (o *HotelReservationInstructionType) GetAdditionalGuestInfoOk() (*ResGuestAdditionalInfoType, bool)`

GetAdditionalGuestInfoOk returns a tuple with the AdditionalGuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalGuestInfo

`func (o *HotelReservationInstructionType) SetAdditionalGuestInfo(v ResGuestAdditionalInfoType)`

SetAdditionalGuestInfo sets AdditionalGuestInfo field to given value.

### HasAdditionalGuestInfo

`func (o *HotelReservationInstructionType) HasAdditionalGuestInfo() bool`

HasAdditionalGuestInfo returns a boolean if a field has been set.

### GetAdvanceCheckIn

`func (o *HotelReservationInstructionType) GetAdvanceCheckIn() AdvanceCheckInType`

GetAdvanceCheckIn returns the AdvanceCheckIn field if non-nil, zero value otherwise.

### GetAdvanceCheckInOk

`func (o *HotelReservationInstructionType) GetAdvanceCheckInOk() (*AdvanceCheckInType, bool)`

GetAdvanceCheckInOk returns a tuple with the AdvanceCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckIn

`func (o *HotelReservationInstructionType) SetAdvanceCheckIn(v AdvanceCheckInType)`

SetAdvanceCheckIn sets AdvanceCheckIn field to given value.

### HasAdvanceCheckIn

`func (o *HotelReservationInstructionType) HasAdvanceCheckIn() bool`

HasAdvanceCheckIn returns a boolean if a field has been set.

### GetAlerts

`func (o *HotelReservationInstructionType) GetAlerts() AlertsType`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *HotelReservationInstructionType) GetAlertsOk() (*AlertsType, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *HotelReservationInstructionType) SetAlerts(v AlertsType)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *HotelReservationInstructionType) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetAllowAutoCheckin

`func (o *HotelReservationInstructionType) GetAllowAutoCheckin() bool`

GetAllowAutoCheckin returns the AllowAutoCheckin field if non-nil, zero value otherwise.

### GetAllowAutoCheckinOk

`func (o *HotelReservationInstructionType) GetAllowAutoCheckinOk() (*bool, bool)`

GetAllowAutoCheckinOk returns a tuple with the AllowAutoCheckin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowAutoCheckin

`func (o *HotelReservationInstructionType) SetAllowAutoCheckin(v bool)`

SetAllowAutoCheckin sets AllowAutoCheckin field to given value.

### HasAllowAutoCheckin

`func (o *HotelReservationInstructionType) HasAllowAutoCheckin() bool`

HasAllowAutoCheckin returns a boolean if a field has been set.

### GetAllowMobileCheckout

`func (o *HotelReservationInstructionType) GetAllowMobileCheckout() bool`

GetAllowMobileCheckout returns the AllowMobileCheckout field if non-nil, zero value otherwise.

### GetAllowMobileCheckoutOk

`func (o *HotelReservationInstructionType) GetAllowMobileCheckoutOk() (*bool, bool)`

GetAllowMobileCheckoutOk returns a tuple with the AllowMobileCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileCheckout

`func (o *HotelReservationInstructionType) SetAllowMobileCheckout(v bool)`

SetAllowMobileCheckout sets AllowMobileCheckout field to given value.

### HasAllowMobileCheckout

`func (o *HotelReservationInstructionType) HasAllowMobileCheckout() bool`

HasAllowMobileCheckout returns a boolean if a field has been set.

### GetAllowMobileViewFolio

`func (o *HotelReservationInstructionType) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *HotelReservationInstructionType) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *HotelReservationInstructionType) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *HotelReservationInstructionType) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetAllowPreRegistration

`func (o *HotelReservationInstructionType) GetAllowPreRegistration() bool`

GetAllowPreRegistration returns the AllowPreRegistration field if non-nil, zero value otherwise.

### GetAllowPreRegistrationOk

`func (o *HotelReservationInstructionType) GetAllowPreRegistrationOk() (*bool, bool)`

GetAllowPreRegistrationOk returns a tuple with the AllowPreRegistration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPreRegistration

`func (o *HotelReservationInstructionType) SetAllowPreRegistration(v bool)`

SetAllowPreRegistration sets AllowPreRegistration field to given value.

### HasAllowPreRegistration

`func (o *HotelReservationInstructionType) HasAllowPreRegistration() bool`

HasAllowPreRegistration returns a boolean if a field has been set.

### GetAllowedActions

`func (o *HotelReservationInstructionType) GetAllowedActions() ReservationAllowedActionsType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *HotelReservationInstructionType) GetAllowedActionsOk() (*ReservationAllowedActionsType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *HotelReservationInstructionType) SetAllowedActions(v ReservationAllowedActionsType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *HotelReservationInstructionType) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetAssociatedReservations

`func (o *HotelReservationInstructionType) GetAssociatedReservations() map[string]interface{}`

GetAssociatedReservations returns the AssociatedReservations field if non-nil, zero value otherwise.

### GetAssociatedReservationsOk

`func (o *HotelReservationInstructionType) GetAssociatedReservationsOk() (*map[string]interface{}, bool)`

GetAssociatedReservationsOk returns a tuple with the AssociatedReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedReservations

`func (o *HotelReservationInstructionType) SetAssociatedReservations(v map[string]interface{})`

SetAssociatedReservations sets AssociatedReservations field to given value.

### HasAssociatedReservations

`func (o *HotelReservationInstructionType) HasAssociatedReservations() bool`

HasAssociatedReservations returns a boolean if a field has been set.

### GetAttachments

`func (o *HotelReservationInstructionType) GetAttachments() AttachmentsType`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *HotelReservationInstructionType) GetAttachmentsOk() (*AttachmentsType, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *HotelReservationInstructionType) SetAttachments(v AttachmentsType)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *HotelReservationInstructionType) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetAutoBorrowFromHouse

`func (o *HotelReservationInstructionType) GetAutoBorrowFromHouse() bool`

GetAutoBorrowFromHouse returns the AutoBorrowFromHouse field if non-nil, zero value otherwise.

### GetAutoBorrowFromHouseOk

`func (o *HotelReservationInstructionType) GetAutoBorrowFromHouseOk() (*bool, bool)`

GetAutoBorrowFromHouseOk returns a tuple with the AutoBorrowFromHouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoBorrowFromHouse

`func (o *HotelReservationInstructionType) SetAutoBorrowFromHouse(v bool)`

SetAutoBorrowFromHouse sets AutoBorrowFromHouse field to given value.

### HasAutoBorrowFromHouse

`func (o *HotelReservationInstructionType) HasAutoBorrowFromHouse() bool`

HasAutoBorrowFromHouse returns a boolean if a field has been set.

### GetCallHistory

`func (o *HotelReservationInstructionType) GetCallHistory() CallHistoryType`

GetCallHistory returns the CallHistory field if non-nil, zero value otherwise.

### GetCallHistoryOk

`func (o *HotelReservationInstructionType) GetCallHistoryOk() (*CallHistoryType, bool)`

GetCallHistoryOk returns a tuple with the CallHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallHistory

`func (o *HotelReservationInstructionType) SetCallHistory(v CallHistoryType)`

SetCallHistory sets CallHistory field to given value.

### HasCallHistory

`func (o *HotelReservationInstructionType) HasCallHistory() bool`

HasCallHistory returns a boolean if a field has been set.

### GetCancellation

`func (o *HotelReservationInstructionType) GetCancellation() HotelReservationInstructionTypeCancellation`

GetCancellation returns the Cancellation field if non-nil, zero value otherwise.

### GetCancellationOk

`func (o *HotelReservationInstructionType) GetCancellationOk() (*HotelReservationInstructionTypeCancellation, bool)`

GetCancellationOk returns a tuple with the Cancellation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellation

`func (o *HotelReservationInstructionType) SetCancellation(v HotelReservationInstructionTypeCancellation)`

SetCancellation sets Cancellation field to given value.

### HasCancellation

`func (o *HotelReservationInstructionType) HasCancellation() bool`

HasCancellation returns a boolean if a field has been set.

### GetCashiering

`func (o *HotelReservationInstructionType) GetCashiering() ResCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *HotelReservationInstructionType) GetCashieringOk() (*ResCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *HotelReservationInstructionType) SetCashiering(v ResCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *HotelReservationInstructionType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetCatering

`func (o *HotelReservationInstructionType) GetCatering() CateringResInfoType`

GetCatering returns the Catering field if non-nil, zero value otherwise.

### GetCateringOk

`func (o *HotelReservationInstructionType) GetCateringOk() (*CateringResInfoType, bool)`

GetCateringOk returns a tuple with the Catering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatering

`func (o *HotelReservationInstructionType) SetCatering(v CateringResInfoType)`

SetCatering sets Catering field to given value.

### HasCatering

`func (o *HotelReservationInstructionType) HasCatering() bool`

HasCatering returns a boolean if a field has been set.

### GetChangeInstrunctions

`func (o *HotelReservationInstructionType) GetChangeInstrunctions() ChangeInstructionType`

GetChangeInstrunctions returns the ChangeInstrunctions field if non-nil, zero value otherwise.

### GetChangeInstrunctionsOk

`func (o *HotelReservationInstructionType) GetChangeInstrunctionsOk() (*ChangeInstructionType, bool)`

GetChangeInstrunctionsOk returns a tuple with the ChangeInstrunctions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeInstrunctions

`func (o *HotelReservationInstructionType) SetChangeInstrunctions(v ChangeInstructionType)`

SetChangeInstrunctions sets ChangeInstrunctions field to given value.

### HasChangeInstrunctions

`func (o *HotelReservationInstructionType) HasChangeInstrunctions() bool`

HasChangeInstrunctions returns a boolean if a field has been set.

### GetChargeCardNumber

`func (o *HotelReservationInstructionType) GetChargeCardNumber() string`

GetChargeCardNumber returns the ChargeCardNumber field if non-nil, zero value otherwise.

### GetChargeCardNumberOk

`func (o *HotelReservationInstructionType) GetChargeCardNumberOk() (*string, bool)`

GetChargeCardNumberOk returns a tuple with the ChargeCardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeCardNumber

`func (o *HotelReservationInstructionType) SetChargeCardNumber(v string)`

SetChargeCardNumber sets ChargeCardNumber field to given value.

### HasChargeCardNumber

`func (o *HotelReservationInstructionType) HasChargeCardNumber() bool`

HasChargeCardNumber returns a boolean if a field has been set.

### GetComments

`func (o *HotelReservationInstructionType) GetComments() []CommentInfoType`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *HotelReservationInstructionType) GetCommentsOk() (*[]CommentInfoType, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *HotelReservationInstructionType) SetComments(v []CommentInfoType)`

SetComments sets Comments field to given value.

### HasComments

`func (o *HotelReservationInstructionType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCompAuthorizer

`func (o *HotelReservationInstructionType) GetCompAuthorizer() CompAuthorizerInfoType`

GetCompAuthorizer returns the CompAuthorizer field if non-nil, zero value otherwise.

### GetCompAuthorizerOk

`func (o *HotelReservationInstructionType) GetCompAuthorizerOk() (*CompAuthorizerInfoType, bool)`

GetCompAuthorizerOk returns a tuple with the CompAuthorizer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAuthorizer

`func (o *HotelReservationInstructionType) SetCompAuthorizer(v CompAuthorizerInfoType)`

SetCompAuthorizer sets CompAuthorizer field to given value.

### HasCompAuthorizer

`func (o *HotelReservationInstructionType) HasCompAuthorizer() bool`

HasCompAuthorizer returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *HotelReservationInstructionType) GetComputedReservationStatus() PMSResStatusType`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *HotelReservationInstructionType) GetComputedReservationStatusOk() (*PMSResStatusType, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *HotelReservationInstructionType) SetComputedReservationStatus(v PMSResStatusType)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *HotelReservationInstructionType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.

### GetConfirmationLetters

`func (o *HotelReservationInstructionType) GetConfirmationLetters() ConfirmationsType`

GetConfirmationLetters returns the ConfirmationLetters field if non-nil, zero value otherwise.

### GetConfirmationLettersOk

`func (o *HotelReservationInstructionType) GetConfirmationLettersOk() (*ConfirmationsType, bool)`

GetConfirmationLettersOk returns a tuple with the ConfirmationLetters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationLetters

`func (o *HotelReservationInstructionType) SetConfirmationLetters(v ConfirmationsType)`

SetConfirmationLetters sets ConfirmationLetters field to given value.

### HasConfirmationLetters

`func (o *HotelReservationInstructionType) HasConfirmationLetters() bool`

HasConfirmationLetters returns a boolean if a field has been set.

### GetCreateBusinessDate

`func (o *HotelReservationInstructionType) GetCreateBusinessDate() string`

GetCreateBusinessDate returns the CreateBusinessDate field if non-nil, zero value otherwise.

### GetCreateBusinessDateOk

`func (o *HotelReservationInstructionType) GetCreateBusinessDateOk() (*string, bool)`

GetCreateBusinessDateOk returns a tuple with the CreateBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateBusinessDate

`func (o *HotelReservationInstructionType) SetCreateBusinessDate(v string)`

SetCreateBusinessDate sets CreateBusinessDate field to given value.

### HasCreateBusinessDate

`func (o *HotelReservationInstructionType) HasCreateBusinessDate() bool`

HasCreateBusinessDate returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *HotelReservationInstructionType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *HotelReservationInstructionType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *HotelReservationInstructionType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *HotelReservationInstructionType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *HotelReservationInstructionType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *HotelReservationInstructionType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *HotelReservationInstructionType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *HotelReservationInstructionType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetCustomChargeExemptionDetails

`func (o *HotelReservationInstructionType) GetCustomChargeExemptionDetails() CustomChargeExemptionsType`

GetCustomChargeExemptionDetails returns the CustomChargeExemptionDetails field if non-nil, zero value otherwise.

### GetCustomChargeExemptionDetailsOk

`func (o *HotelReservationInstructionType) GetCustomChargeExemptionDetailsOk() (*CustomChargeExemptionsType, bool)`

GetCustomChargeExemptionDetailsOk returns a tuple with the CustomChargeExemptionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeExemptionDetails

`func (o *HotelReservationInstructionType) SetCustomChargeExemptionDetails(v CustomChargeExemptionsType)`

SetCustomChargeExemptionDetails sets CustomChargeExemptionDetails field to given value.

### HasCustomChargeExemptionDetails

`func (o *HotelReservationInstructionType) HasCustomChargeExemptionDetails() bool`

HasCustomChargeExemptionDetails returns a boolean if a field has been set.

### GetCustomNameValueDetail

`func (o *HotelReservationInstructionType) GetCustomNameValueDetail() NameValueDetailType`

GetCustomNameValueDetail returns the CustomNameValueDetail field if non-nil, zero value otherwise.

### GetCustomNameValueDetailOk

`func (o *HotelReservationInstructionType) GetCustomNameValueDetailOk() (*NameValueDetailType, bool)`

GetCustomNameValueDetailOk returns a tuple with the CustomNameValueDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNameValueDetail

`func (o *HotelReservationInstructionType) SetCustomNameValueDetail(v NameValueDetailType)`

SetCustomNameValueDetail sets CustomNameValueDetail field to given value.

### HasCustomNameValueDetail

`func (o *HotelReservationInstructionType) HasCustomNameValueDetail() bool`

HasCustomNameValueDetail returns a boolean if a field has been set.

### GetCustomReference

`func (o *HotelReservationInstructionType) GetCustomReference() string`

GetCustomReference returns the CustomReference field if non-nil, zero value otherwise.

### GetCustomReferenceOk

`func (o *HotelReservationInstructionType) GetCustomReferenceOk() (*string, bool)`

GetCustomReferenceOk returns a tuple with the CustomReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomReference

`func (o *HotelReservationInstructionType) SetCustomReference(v string)`

SetCustomReference sets CustomReference field to given value.

### HasCustomReference

`func (o *HotelReservationInstructionType) HasCustomReference() bool`

HasCustomReference returns a boolean if a field has been set.

### GetDisplayColor

`func (o *HotelReservationInstructionType) GetDisplayColor() string`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *HotelReservationInstructionType) GetDisplayColorOk() (*string, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *HotelReservationInstructionType) SetDisplayColor(v string)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *HotelReservationInstructionType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetECertificates

`func (o *HotelReservationInstructionType) GetECertificates() ReservationECertificatesType`

GetECertificates returns the ECertificates field if non-nil, zero value otherwise.

### GetECertificatesOk

`func (o *HotelReservationInstructionType) GetECertificatesOk() (*ReservationECertificatesType, bool)`

GetECertificatesOk returns a tuple with the ECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificates

`func (o *HotelReservationInstructionType) SetECertificates(v ReservationECertificatesType)`

SetECertificates sets ECertificates field to given value.

### HasECertificates

`func (o *HotelReservationInstructionType) HasECertificates() bool`

HasECertificates returns a boolean if a field has been set.

### GetECoupons

`func (o *HotelReservationInstructionType) GetECoupons() ECouponsType`

GetECoupons returns the ECoupons field if non-nil, zero value otherwise.

### GetECouponsOk

`func (o *HotelReservationInstructionType) GetECouponsOk() (*ECouponsType, bool)`

GetECouponsOk returns a tuple with the ECoupons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECoupons

`func (o *HotelReservationInstructionType) SetECoupons(v ECouponsType)`

SetECoupons sets ECoupons field to given value.

### HasECoupons

`func (o *HotelReservationInstructionType) HasECoupons() bool`

HasECoupons returns a boolean if a field has been set.

### GetExtSystemSync

`func (o *HotelReservationInstructionType) GetExtSystemSync() bool`

GetExtSystemSync returns the ExtSystemSync field if non-nil, zero value otherwise.

### GetExtSystemSyncOk

`func (o *HotelReservationInstructionType) GetExtSystemSyncOk() (*bool, bool)`

GetExtSystemSyncOk returns a tuple with the ExtSystemSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtSystemSync

`func (o *HotelReservationInstructionType) SetExtSystemSync(v bool)`

SetExtSystemSync sets ExtSystemSync field to given value.

### HasExtSystemSync

`func (o *HotelReservationInstructionType) HasExtSystemSync() bool`

HasExtSystemSync returns a boolean if a field has been set.

### GetExternalReferences

`func (o *HotelReservationInstructionType) GetExternalReferences() ExternalReferencesType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *HotelReservationInstructionType) GetExternalReferencesOk() (*ExternalReferencesType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *HotelReservationInstructionType) SetExternalReferences(v ExternalReferencesType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *HotelReservationInstructionType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetFixedCharges

`func (o *HotelReservationInstructionType) GetFixedCharges() FixedChargesType`

GetFixedCharges returns the FixedCharges field if non-nil, zero value otherwise.

### GetFixedChargesOk

`func (o *HotelReservationInstructionType) GetFixedChargesOk() (*FixedChargesType, bool)`

GetFixedChargesOk returns a tuple with the FixedCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharges

`func (o *HotelReservationInstructionType) SetFixedCharges(v FixedChargesType)`

SetFixedCharges sets FixedCharges field to given value.

### HasFixedCharges

`func (o *HotelReservationInstructionType) HasFixedCharges() bool`

HasFixedCharges returns a boolean if a field has been set.

### GetFolios

`func (o *HotelReservationInstructionType) GetFolios() FoliosShortInfoType`

GetFolios returns the Folios field if non-nil, zero value otherwise.

### GetFoliosOk

`func (o *HotelReservationInstructionType) GetFoliosOk() (*FoliosShortInfoType, bool)`

GetFoliosOk returns a tuple with the Folios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolios

`func (o *HotelReservationInstructionType) SetFolios(v FoliosShortInfoType)`

SetFolios sets Folios field to given value.

### HasFolios

`func (o *HotelReservationInstructionType) HasFolios() bool`

HasFolios returns a boolean if a field has been set.

### GetGuestComments

`func (o *HotelReservationInstructionType) GetGuestComments() []CommentInfoType`

GetGuestComments returns the GuestComments field if non-nil, zero value otherwise.

### GetGuestCommentsOk

`func (o *HotelReservationInstructionType) GetGuestCommentsOk() (*[]CommentInfoType, bool)`

GetGuestCommentsOk returns a tuple with the GuestComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestComments

`func (o *HotelReservationInstructionType) SetGuestComments(v []CommentInfoType)`

SetGuestComments sets GuestComments field to given value.

### HasGuestComments

`func (o *HotelReservationInstructionType) HasGuestComments() bool`

HasGuestComments returns a boolean if a field has been set.

### GetGuestMemberships

`func (o *HotelReservationInstructionType) GetGuestMemberships() []MembershipType`

GetGuestMemberships returns the GuestMemberships field if non-nil, zero value otherwise.

### GetGuestMembershipsOk

`func (o *HotelReservationInstructionType) GetGuestMembershipsOk() (*[]MembershipType, bool)`

GetGuestMembershipsOk returns a tuple with the GuestMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMemberships

`func (o *HotelReservationInstructionType) SetGuestMemberships(v []MembershipType)`

SetGuestMemberships sets GuestMemberships field to given value.

### HasGuestMemberships

`func (o *HotelReservationInstructionType) HasGuestMemberships() bool`

HasGuestMemberships returns a boolean if a field has been set.

### GetGuestMessages

`func (o *HotelReservationInstructionType) GetGuestMessages() GuestMessagesType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *HotelReservationInstructionType) GetGuestMessagesOk() (*GuestMessagesType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *HotelReservationInstructionType) SetGuestMessages(v GuestMessagesType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *HotelReservationInstructionType) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetHasOpenFolio

`func (o *HotelReservationInstructionType) GetHasOpenFolio() bool`

GetHasOpenFolio returns the HasOpenFolio field if non-nil, zero value otherwise.

### GetHasOpenFolioOk

`func (o *HotelReservationInstructionType) GetHasOpenFolioOk() (*bool, bool)`

GetHasOpenFolioOk returns a tuple with the HasOpenFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasOpenFolio

`func (o *HotelReservationInstructionType) SetHasOpenFolio(v bool)`

SetHasOpenFolio sets HasOpenFolio field to given value.

### HasHasOpenFolio

`func (o *HotelReservationInstructionType) HasHasOpenFolio() bool`

HasHasOpenFolio returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelReservationInstructionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelReservationInstructionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelReservationInstructionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelReservationInstructionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHousekeeping

`func (o *HotelReservationInstructionType) GetHousekeeping() ResHousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *HotelReservationInstructionType) GetHousekeepingOk() (*ResHousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *HotelReservationInstructionType) SetHousekeeping(v ResHousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *HotelReservationInstructionType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetInventoryItems

`func (o *HotelReservationInstructionType) GetInventoryItems() ResInventoryItemsType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *HotelReservationInstructionType) GetInventoryItemsOk() (*ResInventoryItemsType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *HotelReservationInstructionType) SetInventoryItems(v ResInventoryItemsType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *HotelReservationInstructionType) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetLastModifierId

`func (o *HotelReservationInstructionType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *HotelReservationInstructionType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *HotelReservationInstructionType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *HotelReservationInstructionType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *HotelReservationInstructionType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *HotelReservationInstructionType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *HotelReservationInstructionType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *HotelReservationInstructionType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLinkedReservation

`func (o *HotelReservationInstructionType) GetLinkedReservation() LinkedReservationsInfoType`

GetLinkedReservation returns the LinkedReservation field if non-nil, zero value otherwise.

### GetLinkedReservationOk

`func (o *HotelReservationInstructionType) GetLinkedReservationOk() (*LinkedReservationsInfoType, bool)`

GetLinkedReservationOk returns a tuple with the LinkedReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedReservation

`func (o *HotelReservationInstructionType) SetLinkedReservation(v LinkedReservationsInfoType)`

SetLinkedReservation sets LinkedReservation field to given value.

### HasLinkedReservation

`func (o *HotelReservationInstructionType) HasLinkedReservation() bool`

HasLinkedReservation returns a boolean if a field has been set.

### GetLocators

`func (o *HotelReservationInstructionType) GetLocators() ReservationLocatorsType`

GetLocators returns the Locators field if non-nil, zero value otherwise.

### GetLocatorsOk

`func (o *HotelReservationInstructionType) GetLocatorsOk() (*ReservationLocatorsType, bool)`

GetLocatorsOk returns a tuple with the Locators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocators

`func (o *HotelReservationInstructionType) SetLocators(v ReservationLocatorsType)`

SetLocators sets Locators field to given value.

### HasLocators

`func (o *HotelReservationInstructionType) HasLocators() bool`

HasLocators returns a boolean if a field has been set.

### GetLockHandle

`func (o *HotelReservationInstructionType) GetLockHandle() float32`

GetLockHandle returns the LockHandle field if non-nil, zero value otherwise.

### GetLockHandleOk

`func (o *HotelReservationInstructionType) GetLockHandleOk() (*float32, bool)`

GetLockHandleOk returns a tuple with the LockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockHandle

`func (o *HotelReservationInstructionType) SetLockHandle(v float32)`

SetLockHandle sets LockHandle field to given value.

### HasLockHandle

`func (o *HotelReservationInstructionType) HasLockHandle() bool`

HasLockHandle returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *HotelReservationInstructionType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *HotelReservationInstructionType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *HotelReservationInstructionType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *HotelReservationInstructionType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetOptedForCommunication

`func (o *HotelReservationInstructionType) GetOptedForCommunication() bool`

GetOptedForCommunication returns the OptedForCommunication field if non-nil, zero value otherwise.

### GetOptedForCommunicationOk

`func (o *HotelReservationInstructionType) GetOptedForCommunicationOk() (*bool, bool)`

GetOptedForCommunicationOk returns a tuple with the OptedForCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptedForCommunication

`func (o *HotelReservationInstructionType) SetOptedForCommunication(v bool)`

SetOptedForCommunication sets OptedForCommunication field to given value.

### HasOptedForCommunication

`func (o *HotelReservationInstructionType) HasOptedForCommunication() bool`

HasOptedForCommunication returns a boolean if a field has been set.

### GetOverrideBlockRestriction

`func (o *HotelReservationInstructionType) GetOverrideBlockRestriction() bool`

GetOverrideBlockRestriction returns the OverrideBlockRestriction field if non-nil, zero value otherwise.

### GetOverrideBlockRestrictionOk

`func (o *HotelReservationInstructionType) GetOverrideBlockRestrictionOk() (*bool, bool)`

GetOverrideBlockRestrictionOk returns a tuple with the OverrideBlockRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideBlockRestriction

`func (o *HotelReservationInstructionType) SetOverrideBlockRestriction(v bool)`

SetOverrideBlockRestriction sets OverrideBlockRestriction field to given value.

### HasOverrideBlockRestriction

`func (o *HotelReservationInstructionType) HasOverrideBlockRestriction() bool`

HasOverrideBlockRestriction returns a boolean if a field has been set.

### GetOverrideExternalChecks

`func (o *HotelReservationInstructionType) GetOverrideExternalChecks() bool`

GetOverrideExternalChecks returns the OverrideExternalChecks field if non-nil, zero value otherwise.

### GetOverrideExternalChecksOk

`func (o *HotelReservationInstructionType) GetOverrideExternalChecksOk() (*bool, bool)`

GetOverrideExternalChecksOk returns a tuple with the OverrideExternalChecks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideExternalChecks

`func (o *HotelReservationInstructionType) SetOverrideExternalChecks(v bool)`

SetOverrideExternalChecks sets OverrideExternalChecks field to given value.

### HasOverrideExternalChecks

`func (o *HotelReservationInstructionType) HasOverrideExternalChecks() bool`

HasOverrideExternalChecks returns a boolean if a field has been set.

### GetOverrideInstructions

`func (o *HotelReservationInstructionType) GetOverrideInstructions() OverrideInstructionsType`

GetOverrideInstructions returns the OverrideInstructions field if non-nil, zero value otherwise.

### GetOverrideInstructionsOk

`func (o *HotelReservationInstructionType) GetOverrideInstructionsOk() (*OverrideInstructionsType, bool)`

GetOverrideInstructionsOk returns a tuple with the OverrideInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInstructions

`func (o *HotelReservationInstructionType) SetOverrideInstructions(v OverrideInstructionsType)`

SetOverrideInstructions sets OverrideInstructions field to given value.

### HasOverrideInstructions

`func (o *HotelReservationInstructionType) HasOverrideInstructions() bool`

HasOverrideInstructions returns a boolean if a field has been set.

### GetOverrideInventoryCheck

`func (o *HotelReservationInstructionType) GetOverrideInventoryCheck() bool`

GetOverrideInventoryCheck returns the OverrideInventoryCheck field if non-nil, zero value otherwise.

### GetOverrideInventoryCheckOk

`func (o *HotelReservationInstructionType) GetOverrideInventoryCheckOk() (*bool, bool)`

GetOverrideInventoryCheckOk returns a tuple with the OverrideInventoryCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventoryCheck

`func (o *HotelReservationInstructionType) SetOverrideInventoryCheck(v bool)`

SetOverrideInventoryCheck sets OverrideInventoryCheck field to given value.

### HasOverrideInventoryCheck

`func (o *HotelReservationInstructionType) HasOverrideInventoryCheck() bool`

HasOverrideInventoryCheck returns a boolean if a field has been set.

### GetOverrideOutOfServiceCheck

`func (o *HotelReservationInstructionType) GetOverrideOutOfServiceCheck() bool`

GetOverrideOutOfServiceCheck returns the OverrideOutOfServiceCheck field if non-nil, zero value otherwise.

### GetOverrideOutOfServiceCheckOk

`func (o *HotelReservationInstructionType) GetOverrideOutOfServiceCheckOk() (*bool, bool)`

GetOverrideOutOfServiceCheckOk returns a tuple with the OverrideOutOfServiceCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideOutOfServiceCheck

`func (o *HotelReservationInstructionType) SetOverrideOutOfServiceCheck(v bool)`

SetOverrideOutOfServiceCheck sets OverrideOutOfServiceCheck field to given value.

### HasOverrideOutOfServiceCheck

`func (o *HotelReservationInstructionType) HasOverrideOutOfServiceCheck() bool`

HasOverrideOutOfServiceCheck returns a boolean if a field has been set.

### GetOverrideRoomOwnership

`func (o *HotelReservationInstructionType) GetOverrideRoomOwnership() bool`

GetOverrideRoomOwnership returns the OverrideRoomOwnership field if non-nil, zero value otherwise.

### GetOverrideRoomOwnershipOk

`func (o *HotelReservationInstructionType) GetOverrideRoomOwnershipOk() (*bool, bool)`

GetOverrideRoomOwnershipOk returns a tuple with the OverrideRoomOwnership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomOwnership

`func (o *HotelReservationInstructionType) SetOverrideRoomOwnership(v bool)`

SetOverrideRoomOwnership sets OverrideRoomOwnership field to given value.

### HasOverrideRoomOwnership

`func (o *HotelReservationInstructionType) HasOverrideRoomOwnership() bool`

HasOverrideRoomOwnership returns a boolean if a field has been set.

### GetOverrideRotationRoom

`func (o *HotelReservationInstructionType) GetOverrideRotationRoom() bool`

GetOverrideRotationRoom returns the OverrideRotationRoom field if non-nil, zero value otherwise.

### GetOverrideRotationRoomOk

`func (o *HotelReservationInstructionType) GetOverrideRotationRoomOk() (*bool, bool)`

GetOverrideRotationRoomOk returns a tuple with the OverrideRotationRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRotationRoom

`func (o *HotelReservationInstructionType) SetOverrideRotationRoom(v bool)`

SetOverrideRotationRoom sets OverrideRotationRoom field to given value.

### HasOverrideRotationRoom

`func (o *HotelReservationInstructionType) HasOverrideRotationRoom() bool`

HasOverrideRotationRoom returns a boolean if a field has been set.

### GetParty

`func (o *HotelReservationInstructionType) GetParty() string`

GetParty returns the Party field if non-nil, zero value otherwise.

### GetPartyOk

`func (o *HotelReservationInstructionType) GetPartyOk() (*string, bool)`

GetPartyOk returns a tuple with the Party field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParty

`func (o *HotelReservationInstructionType) SetParty(v string)`

SetParty sets Party field to given value.

### HasParty

`func (o *HotelReservationInstructionType) HasParty() bool`

HasParty returns a boolean if a field has been set.

### GetPreRegistered

`func (o *HotelReservationInstructionType) GetPreRegistered() bool`

GetPreRegistered returns the PreRegistered field if non-nil, zero value otherwise.

### GetPreRegisteredOk

`func (o *HotelReservationInstructionType) GetPreRegisteredOk() (*bool, bool)`

GetPreRegisteredOk returns a tuple with the PreRegistered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreRegistered

`func (o *HotelReservationInstructionType) SetPreRegistered(v bool)`

SetPreRegistered sets PreRegistered field to given value.

### HasPreRegistered

`func (o *HotelReservationInstructionType) HasPreRegistered() bool`

HasPreRegistered returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *HotelReservationInstructionType) GetPreferenceCollection() []PreferenceTypeType`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *HotelReservationInstructionType) GetPreferenceCollectionOk() (*[]PreferenceTypeType, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *HotelReservationInstructionType) SetPreferenceCollection(v []PreferenceTypeType)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *HotelReservationInstructionType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetPrepaidCards

`func (o *HotelReservationInstructionType) GetPrepaidCards() PrepaidCardsType`

GetPrepaidCards returns the PrepaidCards field if non-nil, zero value otherwise.

### GetPrepaidCardsOk

`func (o *HotelReservationInstructionType) GetPrepaidCardsOk() (*PrepaidCardsType, bool)`

GetPrepaidCardsOk returns a tuple with the PrepaidCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCards

`func (o *HotelReservationInstructionType) SetPrepaidCards(v PrepaidCardsType)`

SetPrepaidCards sets PrepaidCards field to given value.

### HasPrepaidCards

`func (o *HotelReservationInstructionType) HasPrepaidCards() bool`

HasPrepaidCards returns a boolean if a field has been set.

### GetPrimaryEnrollmentChain

`func (o *HotelReservationInstructionType) GetPrimaryEnrollmentChain() string`

GetPrimaryEnrollmentChain returns the PrimaryEnrollmentChain field if non-nil, zero value otherwise.

### GetPrimaryEnrollmentChainOk

`func (o *HotelReservationInstructionType) GetPrimaryEnrollmentChainOk() (*string, bool)`

GetPrimaryEnrollmentChainOk returns a tuple with the PrimaryEnrollmentChain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEnrollmentChain

`func (o *HotelReservationInstructionType) SetPrimaryEnrollmentChain(v string)`

SetPrimaryEnrollmentChain sets PrimaryEnrollmentChain field to given value.

### HasPrimaryEnrollmentChain

`func (o *HotelReservationInstructionType) HasPrimaryEnrollmentChain() bool`

HasPrimaryEnrollmentChain returns a boolean if a field has been set.

### GetPrimaryEnrollmentResort

`func (o *HotelReservationInstructionType) GetPrimaryEnrollmentResort() string`

GetPrimaryEnrollmentResort returns the PrimaryEnrollmentResort field if non-nil, zero value otherwise.

### GetPrimaryEnrollmentResortOk

`func (o *HotelReservationInstructionType) GetPrimaryEnrollmentResortOk() (*string, bool)`

GetPrimaryEnrollmentResortOk returns a tuple with the PrimaryEnrollmentResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEnrollmentResort

`func (o *HotelReservationInstructionType) SetPrimaryEnrollmentResort(v string)`

SetPrimaryEnrollmentResort sets PrimaryEnrollmentResort field to given value.

### HasPrimaryEnrollmentResort

`func (o *HotelReservationInstructionType) HasPrimaryEnrollmentResort() bool`

HasPrimaryEnrollmentResort returns a boolean if a field has been set.

### GetPrintRate

`func (o *HotelReservationInstructionType) GetPrintRate() bool`

GetPrintRate returns the PrintRate field if non-nil, zero value otherwise.

### GetPrintRateOk

`func (o *HotelReservationInstructionType) GetPrintRateOk() (*bool, bool)`

GetPrintRateOk returns a tuple with the PrintRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintRate

`func (o *HotelReservationInstructionType) SetPrintRate(v bool)`

SetPrintRate sets PrintRate field to given value.

### HasPrintRate

`func (o *HotelReservationInstructionType) HasPrintRate() bool`

HasPrintRate returns a boolean if a field has been set.

### GetProfileAwards

`func (o *HotelReservationInstructionType) GetProfileAwards() AwardsType`

GetProfileAwards returns the ProfileAwards field if non-nil, zero value otherwise.

### GetProfileAwardsOk

`func (o *HotelReservationInstructionType) GetProfileAwardsOk() (*AwardsType, bool)`

GetProfileAwardsOk returns a tuple with the ProfileAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAwards

`func (o *HotelReservationInstructionType) SetProfileAwards(v AwardsType)`

SetProfileAwards sets ProfileAwards field to given value.

### HasProfileAwards

`func (o *HotelReservationInstructionType) HasProfileAwards() bool`

HasProfileAwards returns a boolean if a field has been set.

### GetPurgeDate

`func (o *HotelReservationInstructionType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *HotelReservationInstructionType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *HotelReservationInstructionType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *HotelReservationInstructionType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetQueue

`func (o *HotelReservationInstructionType) GetQueue() ReservationQueueInformationType`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *HotelReservationInstructionType) GetQueueOk() (*ReservationQueueInformationType, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *HotelReservationInstructionType) SetQueue(v ReservationQueueInformationType)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *HotelReservationInstructionType) HasQueue() bool`

HasQueue returns a boolean if a field has been set.

### GetReinstateDate

`func (o *HotelReservationInstructionType) GetReinstateDate() string`

GetReinstateDate returns the ReinstateDate field if non-nil, zero value otherwise.

### GetReinstateDateOk

`func (o *HotelReservationInstructionType) GetReinstateDateOk() (*string, bool)`

GetReinstateDateOk returns a tuple with the ReinstateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReinstateDate

`func (o *HotelReservationInstructionType) SetReinstateDate(v string)`

SetReinstateDate sets ReinstateDate field to given value.

### HasReinstateDate

`func (o *HotelReservationInstructionType) HasReinstateDate() bool`

HasReinstateDate returns a boolean if a field has been set.

### GetReservationActivities

`func (o *HotelReservationInstructionType) GetReservationActivities() ActivityLookUpList`

GetReservationActivities returns the ReservationActivities field if non-nil, zero value otherwise.

### GetReservationActivitiesOk

`func (o *HotelReservationInstructionType) GetReservationActivitiesOk() (*ActivityLookUpList, bool)`

GetReservationActivitiesOk returns a tuple with the ReservationActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationActivities

`func (o *HotelReservationInstructionType) SetReservationActivities(v ActivityLookUpList)`

SetReservationActivities sets ReservationActivities field to given value.

### HasReservationActivities

`func (o *HotelReservationInstructionType) HasReservationActivities() bool`

HasReservationActivities returns a boolean if a field has been set.

### GetReservationAwards

`func (o *HotelReservationInstructionType) GetReservationAwards() AwardsType`

GetReservationAwards returns the ReservationAwards field if non-nil, zero value otherwise.

### GetReservationAwardsOk

`func (o *HotelReservationInstructionType) GetReservationAwardsOk() (*AwardsType, bool)`

GetReservationAwardsOk returns a tuple with the ReservationAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationAwards

`func (o *HotelReservationInstructionType) SetReservationAwards(v AwardsType)`

SetReservationAwards sets ReservationAwards field to given value.

### HasReservationAwards

`func (o *HotelReservationInstructionType) HasReservationAwards() bool`

HasReservationAwards returns a boolean if a field has been set.

### GetReservationCommunication

`func (o *HotelReservationInstructionType) GetReservationCommunication() ResCommunicationType`

GetReservationCommunication returns the ReservationCommunication field if non-nil, zero value otherwise.

### GetReservationCommunicationOk

`func (o *HotelReservationInstructionType) GetReservationCommunicationOk() (*ResCommunicationType, bool)`

GetReservationCommunicationOk returns a tuple with the ReservationCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCommunication

`func (o *HotelReservationInstructionType) SetReservationCommunication(v ResCommunicationType)`

SetReservationCommunication sets ReservationCommunication field to given value.

### HasReservationCommunication

`func (o *HotelReservationInstructionType) HasReservationCommunication() bool`

HasReservationCommunication returns a boolean if a field has been set.

### GetReservationGuests

`func (o *HotelReservationInstructionType) GetReservationGuests() []ResGuestType`

GetReservationGuests returns the ReservationGuests field if non-nil, zero value otherwise.

### GetReservationGuestsOk

`func (o *HotelReservationInstructionType) GetReservationGuestsOk() (*[]ResGuestType, bool)`

GetReservationGuestsOk returns a tuple with the ReservationGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuests

`func (o *HotelReservationInstructionType) SetReservationGuests(v []ResGuestType)`

SetReservationGuests sets ReservationGuests field to given value.

### HasReservationGuests

`func (o *HotelReservationInstructionType) HasReservationGuests() bool`

HasReservationGuests returns a boolean if a field has been set.

### GetReservationIdList

`func (o *HotelReservationInstructionType) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *HotelReservationInstructionType) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *HotelReservationInstructionType) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *HotelReservationInstructionType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationIndicators

`func (o *HotelReservationInstructionType) GetReservationIndicators() IndicatorsType`

GetReservationIndicators returns the ReservationIndicators field if non-nil, zero value otherwise.

### GetReservationIndicatorsOk

`func (o *HotelReservationInstructionType) GetReservationIndicatorsOk() (*IndicatorsType, bool)`

GetReservationIndicatorsOk returns a tuple with the ReservationIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIndicators

`func (o *HotelReservationInstructionType) SetReservationIndicators(v IndicatorsType)`

SetReservationIndicators sets ReservationIndicators field to given value.

### HasReservationIndicators

`func (o *HotelReservationInstructionType) HasReservationIndicators() bool`

HasReservationIndicators returns a boolean if a field has been set.

### GetReservationMemberships

`func (o *HotelReservationInstructionType) GetReservationMemberships() []ReservationMembershipType`

GetReservationMemberships returns the ReservationMemberships field if non-nil, zero value otherwise.

### GetReservationMembershipsOk

`func (o *HotelReservationInstructionType) GetReservationMembershipsOk() (*[]ReservationMembershipType, bool)`

GetReservationMembershipsOk returns a tuple with the ReservationMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMemberships

`func (o *HotelReservationInstructionType) SetReservationMemberships(v []ReservationMembershipType)`

SetReservationMemberships sets ReservationMemberships field to given value.

### HasReservationMemberships

`func (o *HotelReservationInstructionType) HasReservationMemberships() bool`

HasReservationMemberships returns a boolean if a field has been set.

### GetReservationPackages

`func (o *HotelReservationInstructionType) GetReservationPackages() []ReservationPackageType`

GetReservationPackages returns the ReservationPackages field if non-nil, zero value otherwise.

### GetReservationPackagesOk

`func (o *HotelReservationInstructionType) GetReservationPackagesOk() (*[]ReservationPackageType, bool)`

GetReservationPackagesOk returns a tuple with the ReservationPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackages

`func (o *HotelReservationInstructionType) SetReservationPackages(v []ReservationPackageType)`

SetReservationPackages sets ReservationPackages field to given value.

### HasReservationPackages

`func (o *HotelReservationInstructionType) HasReservationPackages() bool`

HasReservationPackages returns a boolean if a field has been set.

### GetReservationPaymentMethods

`func (o *HotelReservationInstructionType) GetReservationPaymentMethods() ReservationPaymentMethodsType`

GetReservationPaymentMethods returns the ReservationPaymentMethods field if non-nil, zero value otherwise.

### GetReservationPaymentMethodsOk

`func (o *HotelReservationInstructionType) GetReservationPaymentMethodsOk() (*ReservationPaymentMethodsType, bool)`

GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethods

`func (o *HotelReservationInstructionType) SetReservationPaymentMethods(v ReservationPaymentMethodsType)`

SetReservationPaymentMethods sets ReservationPaymentMethods field to given value.

### HasReservationPaymentMethods

`func (o *HotelReservationInstructionType) HasReservationPaymentMethods() bool`

HasReservationPaymentMethods returns a boolean if a field has been set.

### GetReservationPolicies

`func (o *HotelReservationInstructionType) GetReservationPolicies() ReservationPoliciesType`

GetReservationPolicies returns the ReservationPolicies field if non-nil, zero value otherwise.

### GetReservationPoliciesOk

`func (o *HotelReservationInstructionType) GetReservationPoliciesOk() (*ReservationPoliciesType, bool)`

GetReservationPoliciesOk returns a tuple with the ReservationPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPolicies

`func (o *HotelReservationInstructionType) SetReservationPolicies(v ReservationPoliciesType)`

SetReservationPolicies sets ReservationPolicies field to given value.

### HasReservationPolicies

`func (o *HotelReservationInstructionType) HasReservationPolicies() bool`

HasReservationPolicies returns a boolean if a field has been set.

### GetReservationProfiles

`func (o *HotelReservationInstructionType) GetReservationProfiles() HotelReservationInstructionTypeReservationProfiles`

GetReservationProfiles returns the ReservationProfiles field if non-nil, zero value otherwise.

### GetReservationProfilesOk

`func (o *HotelReservationInstructionType) GetReservationProfilesOk() (*HotelReservationInstructionTypeReservationProfiles, bool)`

GetReservationProfilesOk returns a tuple with the ReservationProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfiles

`func (o *HotelReservationInstructionType) SetReservationProfiles(v HotelReservationInstructionTypeReservationProfiles)`

SetReservationProfiles sets ReservationProfiles field to given value.

### HasReservationProfiles

`func (o *HotelReservationInstructionType) HasReservationProfiles() bool`

HasReservationProfiles returns a boolean if a field has been set.

### GetReservationStatus

`func (o *HotelReservationInstructionType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *HotelReservationInstructionType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *HotelReservationInstructionType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *HotelReservationInstructionType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetResponseInstructions

`func (o *HotelReservationInstructionType) GetResponseInstructions() HotelReservationInstructionTypeResponseInstructions`

GetResponseInstructions returns the ResponseInstructions field if non-nil, zero value otherwise.

### GetResponseInstructionsOk

`func (o *HotelReservationInstructionType) GetResponseInstructionsOk() (*HotelReservationInstructionTypeResponseInstructions, bool)`

GetResponseInstructionsOk returns a tuple with the ResponseInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstructions

`func (o *HotelReservationInstructionType) SetResponseInstructions(v HotelReservationInstructionTypeResponseInstructions)`

SetResponseInstructions sets ResponseInstructions field to given value.

### HasResponseInstructions

`func (o *HotelReservationInstructionType) HasResponseInstructions() bool`

HasResponseInstructions returns a boolean if a field has been set.

### GetRoomStay

`func (o *HotelReservationInstructionType) GetRoomStay() RoomStayType`

GetRoomStay returns the RoomStay field if non-nil, zero value otherwise.

### GetRoomStayOk

`func (o *HotelReservationInstructionType) GetRoomStayOk() (*RoomStayType, bool)`

GetRoomStayOk returns a tuple with the RoomStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStay

`func (o *HotelReservationInstructionType) SetRoomStay(v RoomStayType)`

SetRoomStay sets RoomStay field to given value.

### HasRoomStay

`func (o *HotelReservationInstructionType) HasRoomStay() bool`

HasRoomStay returns a boolean if a field has been set.

### GetRoomStayReservation

`func (o *HotelReservationInstructionType) GetRoomStayReservation() bool`

GetRoomStayReservation returns the RoomStayReservation field if non-nil, zero value otherwise.

### GetRoomStayReservationOk

`func (o *HotelReservationInstructionType) GetRoomStayReservationOk() (*bool, bool)`

GetRoomStayReservationOk returns a tuple with the RoomStayReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStayReservation

`func (o *HotelReservationInstructionType) SetRoomStayReservation(v bool)`

SetRoomStayReservation sets RoomStayReservation field to given value.

### HasRoomStayReservation

`func (o *HotelReservationInstructionType) HasRoomStayReservation() bool`

HasRoomStayReservation returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *HotelReservationInstructionType) GetRoutingInstructions() RoutingInfoListType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *HotelReservationInstructionType) GetRoutingInstructionsOk() (*RoutingInfoListType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *HotelReservationInstructionType) SetRoutingInstructions(v RoutingInfoListType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *HotelReservationInstructionType) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetScheduledActivities

`func (o *HotelReservationInstructionType) GetScheduledActivities() ActivityLookUpList`

GetScheduledActivities returns the ScheduledActivities field if non-nil, zero value otherwise.

### GetScheduledActivitiesOk

`func (o *HotelReservationInstructionType) GetScheduledActivitiesOk() (*ActivityLookUpList, bool)`

GetScheduledActivitiesOk returns a tuple with the ScheduledActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledActivities

`func (o *HotelReservationInstructionType) SetScheduledActivities(v ActivityLookUpList)`

SetScheduledActivities sets ScheduledActivities field to given value.

### HasScheduledActivities

`func (o *HotelReservationInstructionType) HasScheduledActivities() bool`

HasScheduledActivities returns a boolean if a field has been set.

### GetServiceRequests

`func (o *HotelReservationInstructionType) GetServiceRequests() ServiceRequests`

GetServiceRequests returns the ServiceRequests field if non-nil, zero value otherwise.

### GetServiceRequestsOk

`func (o *HotelReservationInstructionType) GetServiceRequestsOk() (*ServiceRequests, bool)`

GetServiceRequestsOk returns a tuple with the ServiceRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequests

`func (o *HotelReservationInstructionType) SetServiceRequests(v ServiceRequests)`

SetServiceRequests sets ServiceRequests field to given value.

### HasServiceRequests

`func (o *HotelReservationInstructionType) HasServiceRequests() bool`

HasServiceRequests returns a boolean if a field has been set.

### GetSharedGuests

`func (o *HotelReservationInstructionType) GetSharedGuests() ResSharedGuestListType`

GetSharedGuests returns the SharedGuests field if non-nil, zero value otherwise.

### GetSharedGuestsOk

`func (o *HotelReservationInstructionType) GetSharedGuestsOk() (*ResSharedGuestListType, bool)`

GetSharedGuestsOk returns a tuple with the SharedGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedGuests

`func (o *HotelReservationInstructionType) SetSharedGuests(v ResSharedGuestListType)`

SetSharedGuests sets SharedGuests field to given value.

### HasSharedGuests

`func (o *HotelReservationInstructionType) HasSharedGuests() bool`

HasSharedGuests returns a boolean if a field has been set.

### GetShares

`func (o *HotelReservationInstructionType) GetShares() HotelReservationsType`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *HotelReservationInstructionType) GetSharesOk() (*HotelReservationsType, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *HotelReservationInstructionType) SetShares(v HotelReservationsType)`

SetShares sets Shares field to given value.

### HasShares

`func (o *HotelReservationInstructionType) HasShares() bool`

HasShares returns a boolean if a field has been set.

### GetSourceOfSale

`func (o *HotelReservationInstructionType) GetSourceOfSale() SourceOfSaleType`

GetSourceOfSale returns the SourceOfSale field if non-nil, zero value otherwise.

### GetSourceOfSaleOk

`func (o *HotelReservationInstructionType) GetSourceOfSaleOk() (*SourceOfSaleType, bool)`

GetSourceOfSaleOk returns a tuple with the SourceOfSale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfSale

`func (o *HotelReservationInstructionType) SetSourceOfSale(v SourceOfSaleType)`

SetSourceOfSale sets SourceOfSale field to given value.

### HasSourceOfSale

`func (o *HotelReservationInstructionType) HasSourceOfSale() bool`

HasSourceOfSale returns a boolean if a field has been set.

### GetStatisticalClassification

`func (o *HotelReservationInstructionType) GetStatisticalClassification() ResStatClassificationType`

GetStatisticalClassification returns the StatisticalClassification field if non-nil, zero value otherwise.

### GetStatisticalClassificationOk

`func (o *HotelReservationInstructionType) GetStatisticalClassificationOk() (*ResStatClassificationType, bool)`

GetStatisticalClassificationOk returns a tuple with the StatisticalClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticalClassification

`func (o *HotelReservationInstructionType) SetStatisticalClassification(v ResStatClassificationType)`

SetStatisticalClassification sets StatisticalClassification field to given value.

### HasStatisticalClassification

`func (o *HotelReservationInstructionType) HasStatisticalClassification() bool`

HasStatisticalClassification returns a boolean if a field has been set.

### GetTickets

`func (o *HotelReservationInstructionType) GetTickets() TicketsType`

GetTickets returns the Tickets field if non-nil, zero value otherwise.

### GetTicketsOk

`func (o *HotelReservationInstructionType) GetTicketsOk() (*TicketsType, bool)`

GetTicketsOk returns a tuple with the Tickets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTickets

`func (o *HotelReservationInstructionType) SetTickets(v TicketsType)`

SetTickets sets Tickets field to given value.

### HasTickets

`func (o *HotelReservationInstructionType) HasTickets() bool`

HasTickets returns a boolean if a field has been set.

### GetTraces

`func (o *HotelReservationInstructionType) GetTraces() HotelReservationTracesType`

GetTraces returns the Traces field if non-nil, zero value otherwise.

### GetTracesOk

`func (o *HotelReservationInstructionType) GetTracesOk() (*HotelReservationTracesType, bool)`

GetTracesOk returns a tuple with the Traces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraces

`func (o *HotelReservationInstructionType) SetTraces(v HotelReservationTracesType)`

SetTraces sets Traces field to given value.

### HasTraces

`func (o *HotelReservationInstructionType) HasTraces() bool`

HasTraces returns a boolean if a field has been set.

### GetTrackItItems

`func (o *HotelReservationInstructionType) GetTrackItItems() TrackItItemsType`

GetTrackItItems returns the TrackItItems field if non-nil, zero value otherwise.

### GetTrackItItemsOk

`func (o *HotelReservationInstructionType) GetTrackItItemsOk() (*TrackItItemsType, bool)`

GetTrackItItemsOk returns a tuple with the TrackItItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItItems

`func (o *HotelReservationInstructionType) SetTrackItItems(v TrackItItemsType)`

SetTrackItItems sets TrackItItems field to given value.

### HasTrackItItems

`func (o *HotelReservationInstructionType) HasTrackItItems() bool`

HasTrackItItems returns a boolean if a field has been set.

### GetTransactionDiversions

`func (o *HotelReservationInstructionType) GetTransactionDiversions() HotelReservationInstructionTypeTransactionDiversions`

GetTransactionDiversions returns the TransactionDiversions field if non-nil, zero value otherwise.

### GetTransactionDiversionsOk

`func (o *HotelReservationInstructionType) GetTransactionDiversionsOk() (*HotelReservationInstructionTypeTransactionDiversions, bool)`

GetTransactionDiversionsOk returns a tuple with the TransactionDiversions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiversions

`func (o *HotelReservationInstructionType) SetTransactionDiversions(v HotelReservationInstructionTypeTransactionDiversions)`

SetTransactionDiversions sets TransactionDiversions field to given value.

### HasTransactionDiversions

`func (o *HotelReservationInstructionType) HasTransactionDiversions() bool`

HasTransactionDiversions returns a boolean if a field has been set.

### GetUpgradeEligible

`func (o *HotelReservationInstructionType) GetUpgradeEligible() bool`

GetUpgradeEligible returns the UpgradeEligible field if non-nil, zero value otherwise.

### GetUpgradeEligibleOk

`func (o *HotelReservationInstructionType) GetUpgradeEligibleOk() (*bool, bool)`

GetUpgradeEligibleOk returns a tuple with the UpgradeEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeEligible

`func (o *HotelReservationInstructionType) SetUpgradeEligible(v bool)`

SetUpgradeEligible sets UpgradeEligible field to given value.

### HasUpgradeEligible

`func (o *HotelReservationInstructionType) HasUpgradeEligible() bool`

HasUpgradeEligible returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *HotelReservationInstructionType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *HotelReservationInstructionType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *HotelReservationInstructionType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *HotelReservationInstructionType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWaitlist

`func (o *HotelReservationInstructionType) GetWaitlist() WaitlistResType`

GetWaitlist returns the Waitlist field if non-nil, zero value otherwise.

### GetWaitlistOk

`func (o *HotelReservationInstructionType) GetWaitlistOk() (*WaitlistResType, bool)`

GetWaitlistOk returns a tuple with the Waitlist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlist

`func (o *HotelReservationInstructionType) SetWaitlist(v WaitlistResType)`

SetWaitlist sets Waitlist field to given value.

### HasWaitlist

`func (o *HotelReservationInstructionType) HasWaitlist() bool`

HasWaitlist returns a boolean if a field has been set.

### GetWalkIn

`func (o *HotelReservationInstructionType) GetWalkIn() bool`

GetWalkIn returns the WalkIn field if non-nil, zero value otherwise.

### GetWalkInOk

`func (o *HotelReservationInstructionType) GetWalkInOk() (*bool, bool)`

GetWalkInOk returns a tuple with the WalkIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalkIn

`func (o *HotelReservationInstructionType) SetWalkIn(v bool)`

SetWalkIn sets WalkIn field to given value.

### HasWalkIn

`func (o *HotelReservationInstructionType) HasWalkIn() bool`

HasWalkIn returns a boolean if a field has been set.

### GetWebRegistrationCards

`func (o *HotelReservationInstructionType) GetWebRegistrationCards() AttachmentsType`

GetWebRegistrationCards returns the WebRegistrationCards field if non-nil, zero value otherwise.

### GetWebRegistrationCardsOk

`func (o *HotelReservationInstructionType) GetWebRegistrationCardsOk() (*AttachmentsType, bool)`

GetWebRegistrationCardsOk returns a tuple with the WebRegistrationCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebRegistrationCards

`func (o *HotelReservationInstructionType) SetWebRegistrationCards(v AttachmentsType)`

SetWebRegistrationCards sets WebRegistrationCards field to given value.

### HasWebRegistrationCards

`func (o *HotelReservationInstructionType) HasWebRegistrationCards() bool`

HasWebRegistrationCards returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


