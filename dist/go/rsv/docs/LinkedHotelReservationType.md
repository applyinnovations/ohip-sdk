# LinkedHotelReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRestriction** | Pointer to [**ResAccessRestrictionType**](ResAccessRestrictionType.md) |  | [optional] 
**AccessRestrictionMessage** | Pointer to **string** | Configurable Access Restriction Message for Excluded Block or Rate Code. | [optional] 
**AdditionalGuestInfo** | Pointer to [**ResGuestAdditionalInfoType**](ResGuestAdditionalInfoType.md) |  | [optional] 
**AdvanceCheckIn** | Pointer to [**AdvanceCheckInType**](AdvanceCheckInType.md) |  | [optional] 
**Alerts** | Pointer to [**[]AlertType**](AlertType.md) | List of alerts. | [optional] 
**AllowAutoCheckin** | Pointer to **bool** | Flag to allow auto checkin | [optional] 
**AllowMobileCheckout** | Pointer to **bool** | Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false. | [optional] 
**AllowMobileViewFolio** | Pointer to **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | [optional] 
**AllowPreRegistration** | Pointer to **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device . Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | [optional] 
**AllowedActions** | Pointer to [**[]ReservationAllowedActionType**](ReservationAllowedActionType.md) | Allowed action. | [optional] 
**AssociatedReservations** | Pointer to **map[string]interface{}** | Information regarding associated reservations to the reservation. | [optional] 
**Attachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**AutoBorrowFromHouse** | Pointer to **bool** | This flag will force to borrow from house if borrow required for number of rooms requested, this will only applicable when reservation is attached to a Block. | [optional] 
**CallHistory** | Pointer to [**[]CallType**](CallType.md) | Holds call information. | [optional] 
**Cancellation** | Pointer to [**HotelReservationInstructionTypeCancellation**](HotelReservationInstructionTypeCancellation.md) |  | [optional] 
**Cashiering** | Pointer to [**ResCashieringType**](ResCashieringType.md) |  | [optional] 
**Catering** | Pointer to [**CateringResInfoType**](CateringResInfoType.md) |  | [optional] 
**ChargeCardNumber** | Pointer to **string** | This attribute represents Hotel charge card number. This number is generated automatically in OPERA when a reservation is created in OPERA. It is part of a functionality that provide the guest with the convenience of placing all their charges directly on their reservation folio. | [optional] 
**Comments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the reservation. | [optional] 
**CompAuthorizer** | Pointer to [**CompAuthorizerInfoType**](CompAuthorizerInfoType.md) |  | [optional] 
**ComputedReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**ConfirmationLetters** | Pointer to [**[]ConfirmationType**](ConfirmationType.md) | List of confirmation letters. | [optional] 
**CreateBusinessDate** | Pointer to **string** | Business Date when the reservation was created. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**CustomChargeExemptionDetails** | Pointer to [**[]CustomChargeExemptionType**](CustomChargeExemptionType.md) | List of Custom Charge Exemptions. | [optional] 
**CustomNameValueDetail** | Pointer to [**NameValueDetailType**](NameValueDetailType.md) |  | [optional] 
**CustomReference** | Pointer to **string** | Custom Reference to identify reservation. | [optional] 
**DisplayColor** | Pointer to **string** | The color to display this reservation on room grid displays. | [optional] 
**ECertificates** | Pointer to [**[]ReservationECertificateType**](ReservationECertificateType.md) | Collection of ECertificateType object. | [optional] 
**ECoupons** | Pointer to [**[]ECouponType**](ECouponType.md) | Collection of ECouponType object. | [optional] 
**ExtSystemSync** | Pointer to **bool** |  | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**FixedCharges** | Pointer to [**[]FixedChargeType**](FixedChargeType.md) | Holds fixed charge detail. | [optional] 
**Folios** | Pointer to [**[]FolioShortInfoType**](FolioShortInfoType.md) | This type contains a list of generated bills for a reservation. | [optional] 
**GuestComments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the profile. | [optional] 
**GuestMemberships** | Pointer to [**[]MembershipType**](MembershipType.md) | List of Memberships for the Guest related to the reservation. | [optional] 
**GuestMessages** | Pointer to [**[]GuestMessageType**](GuestMessageType.md) | Holds the Message Information | [optional] 
**HasOpenFolio** | Pointer to **bool** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**Housekeeping** | Pointer to [**ResHousekeepingType**](ResHousekeepingType.md) |  | [optional] 
**InventoryItems** | Pointer to [**ResInventoryItemsType**](ResInventoryItemsType.md) |  | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LinkReservationType** | Pointer to [**LinkedReservationType**](LinkedReservationType.md) |  | [optional] 
**LinkedReservation** | Pointer to [**LinkedReservationsInfoType**](LinkedReservationsInfoType.md) |  | [optional] 
**Locators** | Pointer to [**[]ReservationLocatorType**](ReservationLocatorType.md) | Holds the Locator Information. | [optional] 
**LockHandle** | Pointer to **float32** | An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid. | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this reservation as recently accessed. | [optional] 
**OptedForCommunication** | Pointer to **bool** | Flag containing true or false value to determine if the guest has opted for communications pertaining to this reservation.Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is marked for communication. Upon fetch, the current state of the flag will show true or false. | [optional] 
**OverrideBlockRestriction** | Pointer to **bool** |  | [optional] 
**OverrideExternalChecks** | Pointer to **bool** | Forcefully override the create/update action on the Reservation. For real-time CRS interfaces, this element is used as force selling indicator in case of Create or Update Reservation | [optional] 
**OverrideInstructions** | Pointer to [**[]OverrideInstructionType**](OverrideInstructionType.md) | List of override actions done. | [optional] 
**OverrideInventoryCheck** | Pointer to **bool** | Indicates to Override the Room Inventory Check if applicable. | [optional] 
**OverrideOutOfServiceCheck** | Pointer to **bool** | Indicates to Override the Room Out Of Service Check if applicable. | [optional] 
**Party** | Pointer to **string** | Party/PartyCode when reservation is part of a party(a small group). | [optional] 
**PreRegistered** | Pointer to **bool** | Is the reservation pre-registered. | [optional] 
**PreferenceCollection** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Collection of reservation preferences. | [optional] 
**PrepaidCards** | Pointer to [**[]PrepaidCardType**](PrepaidCardType.md) | Holds fixed charge detail. | [optional] 
**PrimaryEnrollmentChain** | Pointer to **string** | Name of the Chain for the primary enrollment | [optional] 
**PrimaryEnrollmentResort** | Pointer to **string** | Name Of the Resort/Hotel for the primary enrollment | [optional] 
**PrintRate** | Pointer to **bool** | Indicates whether to show the rate or not on a printed document which includes the rate. | [optional] 
**ProfileAwards** | Pointer to [**[]AwardType**](AwardType.md) | List of awards. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Queue** | Pointer to [**ReservationQueueInformationType**](ReservationQueueInformationType.md) |  | [optional] 
**ReinstateDate** | Pointer to **string** | Business Date when the reservation was last reinstated. | [optional] 
**ReservationActivities** | Pointer to [**[]FetchActivityBookingsType**](FetchActivityBookingsType.md) | Criteria for fetching Activity Bookings. | [optional] 
**ReservationAwards** | Pointer to [**[]AwardType**](AwardType.md) | List of awards. | [optional] 
**ReservationCommunication** | Pointer to [**ResCommunicationType**](ResCommunicationType.md) |  | [optional] 
**ReservationGuests** | Pointer to [**[]ResGuestType**](ResGuestType.md) | Collection of guests associated with the reservation. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**ReservationMemberships** | Pointer to [**[]ReservationMembershipType**](ReservationMembershipType.md) | List of reservation memberships. | [optional] 
**ReservationPackages** | Pointer to [**[]ReservationPackageType**](ReservationPackageType.md) | A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges. | [optional] 
**ReservationPaymentMethods** | Pointer to [**[]ReservationPaymentMethodType**](ReservationPaymentMethodType.md) | Defines reservation payment methods. | [optional] 
**ReservationPolicies** | Pointer to [**ReservationPoliciesType**](ReservationPoliciesType.md) |  | [optional] 
**ReservationProfiles** | Pointer to [**HotelReservationInstructionTypeReservationProfiles**](HotelReservationInstructionTypeReservationProfiles.md) |  | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**RoomStay** | Pointer to [**RoomStayType**](RoomStayType.md) |  | [optional] 
**RoomStayReservation** | Pointer to **bool** | Boolean True if this reservation is reserving rooms. False if it is only reserving services. | [optional] 
**RoutingInstructions** | Pointer to [**[]RoutingInfoType**](RoutingInfoType.md) | A routing info object can either be of type Folio OR of type Room with its corresponding instructions. | [optional] 
**ScheduledActivities** | Pointer to [**[]FetchActivityBookingsType**](FetchActivityBookingsType.md) | Criteria for fetching Activity Bookings. | [optional] 
**ServiceRequests** | Pointer to [**[]ServiceRequest**](ServiceRequest.md) | Service request. | [optional] 
**SharedGuests** | Pointer to [**[]ResSharedGuestInfoType**](ResSharedGuestInfoType.md) | Collection of shared guest reservations. | [optional] 
**Shares** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**SourceOfSale** | Pointer to [**SourceOfSaleType**](SourceOfSaleType.md) |  | [optional] 
**StatisticalClassification** | Pointer to [**ResStatClassificationType**](ResStatClassificationType.md) |  | [optional] 
**Tickets** | Pointer to [**[]TicketType**](TicketType.md) | Collection of TicketType objects. | [optional] 
**Traces** | Pointer to [**[]HotelReservationTraceType**](HotelReservationTraceType.md) | List of Reservation Traces. | [optional] 
**TrackItItems** | Pointer to [**[]TrackItItemType**](TrackItItemType.md) |  | [optional] 
**TransactionDiversions** | Pointer to [**HotelReservationInstructionTypeTransactionDiversions**](HotelReservationInstructionTypeTransactionDiversions.md) |  | [optional] 
**UpgradeEligible** | Pointer to **bool** | Indicates whether the reservation is eligible for upgrade. | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**Waitlist** | Pointer to [**WaitlistResType**](WaitlistResType.md) |  | [optional] 
**WalkIn** | Pointer to **bool** | When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in. | [optional] 
**WebRegistrationCards** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 

## Methods

### NewLinkedHotelReservationType

`func NewLinkedHotelReservationType() *LinkedHotelReservationType`

NewLinkedHotelReservationType instantiates a new LinkedHotelReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedHotelReservationTypeWithDefaults

`func NewLinkedHotelReservationTypeWithDefaults() *LinkedHotelReservationType`

NewLinkedHotelReservationTypeWithDefaults instantiates a new LinkedHotelReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRestriction

`func (o *LinkedHotelReservationType) GetAccessRestriction() ResAccessRestrictionType`

GetAccessRestriction returns the AccessRestriction field if non-nil, zero value otherwise.

### GetAccessRestrictionOk

`func (o *LinkedHotelReservationType) GetAccessRestrictionOk() (*ResAccessRestrictionType, bool)`

GetAccessRestrictionOk returns a tuple with the AccessRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestriction

`func (o *LinkedHotelReservationType) SetAccessRestriction(v ResAccessRestrictionType)`

SetAccessRestriction sets AccessRestriction field to given value.

### HasAccessRestriction

`func (o *LinkedHotelReservationType) HasAccessRestriction() bool`

HasAccessRestriction returns a boolean if a field has been set.

### GetAccessRestrictionMessage

`func (o *LinkedHotelReservationType) GetAccessRestrictionMessage() string`

GetAccessRestrictionMessage returns the AccessRestrictionMessage field if non-nil, zero value otherwise.

### GetAccessRestrictionMessageOk

`func (o *LinkedHotelReservationType) GetAccessRestrictionMessageOk() (*string, bool)`

GetAccessRestrictionMessageOk returns a tuple with the AccessRestrictionMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestrictionMessage

`func (o *LinkedHotelReservationType) SetAccessRestrictionMessage(v string)`

SetAccessRestrictionMessage sets AccessRestrictionMessage field to given value.

### HasAccessRestrictionMessage

`func (o *LinkedHotelReservationType) HasAccessRestrictionMessage() bool`

HasAccessRestrictionMessage returns a boolean if a field has been set.

### GetAdditionalGuestInfo

`func (o *LinkedHotelReservationType) GetAdditionalGuestInfo() ResGuestAdditionalInfoType`

GetAdditionalGuestInfo returns the AdditionalGuestInfo field if non-nil, zero value otherwise.

### GetAdditionalGuestInfoOk

`func (o *LinkedHotelReservationType) GetAdditionalGuestInfoOk() (*ResGuestAdditionalInfoType, bool)`

GetAdditionalGuestInfoOk returns a tuple with the AdditionalGuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalGuestInfo

`func (o *LinkedHotelReservationType) SetAdditionalGuestInfo(v ResGuestAdditionalInfoType)`

SetAdditionalGuestInfo sets AdditionalGuestInfo field to given value.

### HasAdditionalGuestInfo

`func (o *LinkedHotelReservationType) HasAdditionalGuestInfo() bool`

HasAdditionalGuestInfo returns a boolean if a field has been set.

### GetAdvanceCheckIn

`func (o *LinkedHotelReservationType) GetAdvanceCheckIn() AdvanceCheckInType`

GetAdvanceCheckIn returns the AdvanceCheckIn field if non-nil, zero value otherwise.

### GetAdvanceCheckInOk

`func (o *LinkedHotelReservationType) GetAdvanceCheckInOk() (*AdvanceCheckInType, bool)`

GetAdvanceCheckInOk returns a tuple with the AdvanceCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckIn

`func (o *LinkedHotelReservationType) SetAdvanceCheckIn(v AdvanceCheckInType)`

SetAdvanceCheckIn sets AdvanceCheckIn field to given value.

### HasAdvanceCheckIn

`func (o *LinkedHotelReservationType) HasAdvanceCheckIn() bool`

HasAdvanceCheckIn returns a boolean if a field has been set.

### GetAlerts

`func (o *LinkedHotelReservationType) GetAlerts() []AlertType`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *LinkedHotelReservationType) GetAlertsOk() (*[]AlertType, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *LinkedHotelReservationType) SetAlerts(v []AlertType)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *LinkedHotelReservationType) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetAllowAutoCheckin

`func (o *LinkedHotelReservationType) GetAllowAutoCheckin() bool`

GetAllowAutoCheckin returns the AllowAutoCheckin field if non-nil, zero value otherwise.

### GetAllowAutoCheckinOk

`func (o *LinkedHotelReservationType) GetAllowAutoCheckinOk() (*bool, bool)`

GetAllowAutoCheckinOk returns a tuple with the AllowAutoCheckin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowAutoCheckin

`func (o *LinkedHotelReservationType) SetAllowAutoCheckin(v bool)`

SetAllowAutoCheckin sets AllowAutoCheckin field to given value.

### HasAllowAutoCheckin

`func (o *LinkedHotelReservationType) HasAllowAutoCheckin() bool`

HasAllowAutoCheckin returns a boolean if a field has been set.

### GetAllowMobileCheckout

`func (o *LinkedHotelReservationType) GetAllowMobileCheckout() bool`

GetAllowMobileCheckout returns the AllowMobileCheckout field if non-nil, zero value otherwise.

### GetAllowMobileCheckoutOk

`func (o *LinkedHotelReservationType) GetAllowMobileCheckoutOk() (*bool, bool)`

GetAllowMobileCheckoutOk returns a tuple with the AllowMobileCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileCheckout

`func (o *LinkedHotelReservationType) SetAllowMobileCheckout(v bool)`

SetAllowMobileCheckout sets AllowMobileCheckout field to given value.

### HasAllowMobileCheckout

`func (o *LinkedHotelReservationType) HasAllowMobileCheckout() bool`

HasAllowMobileCheckout returns a boolean if a field has been set.

### GetAllowMobileViewFolio

`func (o *LinkedHotelReservationType) GetAllowMobileViewFolio() bool`

GetAllowMobileViewFolio returns the AllowMobileViewFolio field if non-nil, zero value otherwise.

### GetAllowMobileViewFolioOk

`func (o *LinkedHotelReservationType) GetAllowMobileViewFolioOk() (*bool, bool)`

GetAllowMobileViewFolioOk returns a tuple with the AllowMobileViewFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowMobileViewFolio

`func (o *LinkedHotelReservationType) SetAllowMobileViewFolio(v bool)`

SetAllowMobileViewFolio sets AllowMobileViewFolio field to given value.

### HasAllowMobileViewFolio

`func (o *LinkedHotelReservationType) HasAllowMobileViewFolio() bool`

HasAllowMobileViewFolio returns a boolean if a field has been set.

### GetAllowPreRegistration

`func (o *LinkedHotelReservationType) GetAllowPreRegistration() bool`

GetAllowPreRegistration returns the AllowPreRegistration field if non-nil, zero value otherwise.

### GetAllowPreRegistrationOk

`func (o *LinkedHotelReservationType) GetAllowPreRegistrationOk() (*bool, bool)`

GetAllowPreRegistrationOk returns a tuple with the AllowPreRegistration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPreRegistration

`func (o *LinkedHotelReservationType) SetAllowPreRegistration(v bool)`

SetAllowPreRegistration sets AllowPreRegistration field to given value.

### HasAllowPreRegistration

`func (o *LinkedHotelReservationType) HasAllowPreRegistration() bool`

HasAllowPreRegistration returns a boolean if a field has been set.

### GetAllowedActions

`func (o *LinkedHotelReservationType) GetAllowedActions() []ReservationAllowedActionType`

GetAllowedActions returns the AllowedActions field if non-nil, zero value otherwise.

### GetAllowedActionsOk

`func (o *LinkedHotelReservationType) GetAllowedActionsOk() (*[]ReservationAllowedActionType, bool)`

GetAllowedActionsOk returns a tuple with the AllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedActions

`func (o *LinkedHotelReservationType) SetAllowedActions(v []ReservationAllowedActionType)`

SetAllowedActions sets AllowedActions field to given value.

### HasAllowedActions

`func (o *LinkedHotelReservationType) HasAllowedActions() bool`

HasAllowedActions returns a boolean if a field has been set.

### GetAssociatedReservations

`func (o *LinkedHotelReservationType) GetAssociatedReservations() map[string]interface{}`

GetAssociatedReservations returns the AssociatedReservations field if non-nil, zero value otherwise.

### GetAssociatedReservationsOk

`func (o *LinkedHotelReservationType) GetAssociatedReservationsOk() (*map[string]interface{}, bool)`

GetAssociatedReservationsOk returns a tuple with the AssociatedReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedReservations

`func (o *LinkedHotelReservationType) SetAssociatedReservations(v map[string]interface{})`

SetAssociatedReservations sets AssociatedReservations field to given value.

### HasAssociatedReservations

`func (o *LinkedHotelReservationType) HasAssociatedReservations() bool`

HasAssociatedReservations returns a boolean if a field has been set.

### GetAttachments

`func (o *LinkedHotelReservationType) GetAttachments() []AttachmentType`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *LinkedHotelReservationType) GetAttachmentsOk() (*[]AttachmentType, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *LinkedHotelReservationType) SetAttachments(v []AttachmentType)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *LinkedHotelReservationType) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetAutoBorrowFromHouse

`func (o *LinkedHotelReservationType) GetAutoBorrowFromHouse() bool`

GetAutoBorrowFromHouse returns the AutoBorrowFromHouse field if non-nil, zero value otherwise.

### GetAutoBorrowFromHouseOk

`func (o *LinkedHotelReservationType) GetAutoBorrowFromHouseOk() (*bool, bool)`

GetAutoBorrowFromHouseOk returns a tuple with the AutoBorrowFromHouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoBorrowFromHouse

`func (o *LinkedHotelReservationType) SetAutoBorrowFromHouse(v bool)`

SetAutoBorrowFromHouse sets AutoBorrowFromHouse field to given value.

### HasAutoBorrowFromHouse

`func (o *LinkedHotelReservationType) HasAutoBorrowFromHouse() bool`

HasAutoBorrowFromHouse returns a boolean if a field has been set.

### GetCallHistory

`func (o *LinkedHotelReservationType) GetCallHistory() []CallType`

GetCallHistory returns the CallHistory field if non-nil, zero value otherwise.

### GetCallHistoryOk

`func (o *LinkedHotelReservationType) GetCallHistoryOk() (*[]CallType, bool)`

GetCallHistoryOk returns a tuple with the CallHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallHistory

`func (o *LinkedHotelReservationType) SetCallHistory(v []CallType)`

SetCallHistory sets CallHistory field to given value.

### HasCallHistory

`func (o *LinkedHotelReservationType) HasCallHistory() bool`

HasCallHistory returns a boolean if a field has been set.

### GetCancellation

`func (o *LinkedHotelReservationType) GetCancellation() HotelReservationInstructionTypeCancellation`

GetCancellation returns the Cancellation field if non-nil, zero value otherwise.

### GetCancellationOk

`func (o *LinkedHotelReservationType) GetCancellationOk() (*HotelReservationInstructionTypeCancellation, bool)`

GetCancellationOk returns a tuple with the Cancellation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellation

`func (o *LinkedHotelReservationType) SetCancellation(v HotelReservationInstructionTypeCancellation)`

SetCancellation sets Cancellation field to given value.

### HasCancellation

`func (o *LinkedHotelReservationType) HasCancellation() bool`

HasCancellation returns a boolean if a field has been set.

### GetCashiering

`func (o *LinkedHotelReservationType) GetCashiering() ResCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *LinkedHotelReservationType) GetCashieringOk() (*ResCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *LinkedHotelReservationType) SetCashiering(v ResCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *LinkedHotelReservationType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetCatering

`func (o *LinkedHotelReservationType) GetCatering() CateringResInfoType`

GetCatering returns the Catering field if non-nil, zero value otherwise.

### GetCateringOk

`func (o *LinkedHotelReservationType) GetCateringOk() (*CateringResInfoType, bool)`

GetCateringOk returns a tuple with the Catering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatering

`func (o *LinkedHotelReservationType) SetCatering(v CateringResInfoType)`

SetCatering sets Catering field to given value.

### HasCatering

`func (o *LinkedHotelReservationType) HasCatering() bool`

HasCatering returns a boolean if a field has been set.

### GetChargeCardNumber

`func (o *LinkedHotelReservationType) GetChargeCardNumber() string`

GetChargeCardNumber returns the ChargeCardNumber field if non-nil, zero value otherwise.

### GetChargeCardNumberOk

`func (o *LinkedHotelReservationType) GetChargeCardNumberOk() (*string, bool)`

GetChargeCardNumberOk returns a tuple with the ChargeCardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeCardNumber

`func (o *LinkedHotelReservationType) SetChargeCardNumber(v string)`

SetChargeCardNumber sets ChargeCardNumber field to given value.

### HasChargeCardNumber

`func (o *LinkedHotelReservationType) HasChargeCardNumber() bool`

HasChargeCardNumber returns a boolean if a field has been set.

### GetComments

`func (o *LinkedHotelReservationType) GetComments() []CommentInfoType`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *LinkedHotelReservationType) GetCommentsOk() (*[]CommentInfoType, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *LinkedHotelReservationType) SetComments(v []CommentInfoType)`

SetComments sets Comments field to given value.

### HasComments

`func (o *LinkedHotelReservationType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCompAuthorizer

`func (o *LinkedHotelReservationType) GetCompAuthorizer() CompAuthorizerInfoType`

GetCompAuthorizer returns the CompAuthorizer field if non-nil, zero value otherwise.

### GetCompAuthorizerOk

`func (o *LinkedHotelReservationType) GetCompAuthorizerOk() (*CompAuthorizerInfoType, bool)`

GetCompAuthorizerOk returns a tuple with the CompAuthorizer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAuthorizer

`func (o *LinkedHotelReservationType) SetCompAuthorizer(v CompAuthorizerInfoType)`

SetCompAuthorizer sets CompAuthorizer field to given value.

### HasCompAuthorizer

`func (o *LinkedHotelReservationType) HasCompAuthorizer() bool`

HasCompAuthorizer returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *LinkedHotelReservationType) GetComputedReservationStatus() PMSResStatusType`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *LinkedHotelReservationType) GetComputedReservationStatusOk() (*PMSResStatusType, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *LinkedHotelReservationType) SetComputedReservationStatus(v PMSResStatusType)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *LinkedHotelReservationType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.

### GetConfirmationLetters

`func (o *LinkedHotelReservationType) GetConfirmationLetters() []ConfirmationType`

GetConfirmationLetters returns the ConfirmationLetters field if non-nil, zero value otherwise.

### GetConfirmationLettersOk

`func (o *LinkedHotelReservationType) GetConfirmationLettersOk() (*[]ConfirmationType, bool)`

GetConfirmationLettersOk returns a tuple with the ConfirmationLetters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationLetters

`func (o *LinkedHotelReservationType) SetConfirmationLetters(v []ConfirmationType)`

SetConfirmationLetters sets ConfirmationLetters field to given value.

### HasConfirmationLetters

`func (o *LinkedHotelReservationType) HasConfirmationLetters() bool`

HasConfirmationLetters returns a boolean if a field has been set.

### GetCreateBusinessDate

`func (o *LinkedHotelReservationType) GetCreateBusinessDate() string`

GetCreateBusinessDate returns the CreateBusinessDate field if non-nil, zero value otherwise.

### GetCreateBusinessDateOk

`func (o *LinkedHotelReservationType) GetCreateBusinessDateOk() (*string, bool)`

GetCreateBusinessDateOk returns a tuple with the CreateBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateBusinessDate

`func (o *LinkedHotelReservationType) SetCreateBusinessDate(v string)`

SetCreateBusinessDate sets CreateBusinessDate field to given value.

### HasCreateBusinessDate

`func (o *LinkedHotelReservationType) HasCreateBusinessDate() bool`

HasCreateBusinessDate returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *LinkedHotelReservationType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *LinkedHotelReservationType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *LinkedHotelReservationType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *LinkedHotelReservationType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *LinkedHotelReservationType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *LinkedHotelReservationType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *LinkedHotelReservationType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *LinkedHotelReservationType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetCustomChargeExemptionDetails

`func (o *LinkedHotelReservationType) GetCustomChargeExemptionDetails() []CustomChargeExemptionType`

GetCustomChargeExemptionDetails returns the CustomChargeExemptionDetails field if non-nil, zero value otherwise.

### GetCustomChargeExemptionDetailsOk

`func (o *LinkedHotelReservationType) GetCustomChargeExemptionDetailsOk() (*[]CustomChargeExemptionType, bool)`

GetCustomChargeExemptionDetailsOk returns a tuple with the CustomChargeExemptionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeExemptionDetails

`func (o *LinkedHotelReservationType) SetCustomChargeExemptionDetails(v []CustomChargeExemptionType)`

SetCustomChargeExemptionDetails sets CustomChargeExemptionDetails field to given value.

### HasCustomChargeExemptionDetails

`func (o *LinkedHotelReservationType) HasCustomChargeExemptionDetails() bool`

HasCustomChargeExemptionDetails returns a boolean if a field has been set.

### GetCustomNameValueDetail

`func (o *LinkedHotelReservationType) GetCustomNameValueDetail() NameValueDetailType`

GetCustomNameValueDetail returns the CustomNameValueDetail field if non-nil, zero value otherwise.

### GetCustomNameValueDetailOk

`func (o *LinkedHotelReservationType) GetCustomNameValueDetailOk() (*NameValueDetailType, bool)`

GetCustomNameValueDetailOk returns a tuple with the CustomNameValueDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNameValueDetail

`func (o *LinkedHotelReservationType) SetCustomNameValueDetail(v NameValueDetailType)`

SetCustomNameValueDetail sets CustomNameValueDetail field to given value.

### HasCustomNameValueDetail

`func (o *LinkedHotelReservationType) HasCustomNameValueDetail() bool`

HasCustomNameValueDetail returns a boolean if a field has been set.

### GetCustomReference

`func (o *LinkedHotelReservationType) GetCustomReference() string`

GetCustomReference returns the CustomReference field if non-nil, zero value otherwise.

### GetCustomReferenceOk

`func (o *LinkedHotelReservationType) GetCustomReferenceOk() (*string, bool)`

GetCustomReferenceOk returns a tuple with the CustomReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomReference

`func (o *LinkedHotelReservationType) SetCustomReference(v string)`

SetCustomReference sets CustomReference field to given value.

### HasCustomReference

`func (o *LinkedHotelReservationType) HasCustomReference() bool`

HasCustomReference returns a boolean if a field has been set.

### GetDisplayColor

`func (o *LinkedHotelReservationType) GetDisplayColor() string`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *LinkedHotelReservationType) GetDisplayColorOk() (*string, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *LinkedHotelReservationType) SetDisplayColor(v string)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *LinkedHotelReservationType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetECertificates

`func (o *LinkedHotelReservationType) GetECertificates() []ReservationECertificateType`

GetECertificates returns the ECertificates field if non-nil, zero value otherwise.

### GetECertificatesOk

`func (o *LinkedHotelReservationType) GetECertificatesOk() (*[]ReservationECertificateType, bool)`

GetECertificatesOk returns a tuple with the ECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificates

`func (o *LinkedHotelReservationType) SetECertificates(v []ReservationECertificateType)`

SetECertificates sets ECertificates field to given value.

### HasECertificates

`func (o *LinkedHotelReservationType) HasECertificates() bool`

HasECertificates returns a boolean if a field has been set.

### GetECoupons

`func (o *LinkedHotelReservationType) GetECoupons() []ECouponType`

GetECoupons returns the ECoupons field if non-nil, zero value otherwise.

### GetECouponsOk

`func (o *LinkedHotelReservationType) GetECouponsOk() (*[]ECouponType, bool)`

GetECouponsOk returns a tuple with the ECoupons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECoupons

`func (o *LinkedHotelReservationType) SetECoupons(v []ECouponType)`

SetECoupons sets ECoupons field to given value.

### HasECoupons

`func (o *LinkedHotelReservationType) HasECoupons() bool`

HasECoupons returns a boolean if a field has been set.

### GetExtSystemSync

`func (o *LinkedHotelReservationType) GetExtSystemSync() bool`

GetExtSystemSync returns the ExtSystemSync field if non-nil, zero value otherwise.

### GetExtSystemSyncOk

`func (o *LinkedHotelReservationType) GetExtSystemSyncOk() (*bool, bool)`

GetExtSystemSyncOk returns a tuple with the ExtSystemSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtSystemSync

`func (o *LinkedHotelReservationType) SetExtSystemSync(v bool)`

SetExtSystemSync sets ExtSystemSync field to given value.

### HasExtSystemSync

`func (o *LinkedHotelReservationType) HasExtSystemSync() bool`

HasExtSystemSync returns a boolean if a field has been set.

### GetExternalReferences

`func (o *LinkedHotelReservationType) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *LinkedHotelReservationType) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *LinkedHotelReservationType) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *LinkedHotelReservationType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetFixedCharges

`func (o *LinkedHotelReservationType) GetFixedCharges() []FixedChargeType`

GetFixedCharges returns the FixedCharges field if non-nil, zero value otherwise.

### GetFixedChargesOk

`func (o *LinkedHotelReservationType) GetFixedChargesOk() (*[]FixedChargeType, bool)`

GetFixedChargesOk returns a tuple with the FixedCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharges

`func (o *LinkedHotelReservationType) SetFixedCharges(v []FixedChargeType)`

SetFixedCharges sets FixedCharges field to given value.

### HasFixedCharges

`func (o *LinkedHotelReservationType) HasFixedCharges() bool`

HasFixedCharges returns a boolean if a field has been set.

### GetFolios

`func (o *LinkedHotelReservationType) GetFolios() []FolioShortInfoType`

GetFolios returns the Folios field if non-nil, zero value otherwise.

### GetFoliosOk

`func (o *LinkedHotelReservationType) GetFoliosOk() (*[]FolioShortInfoType, bool)`

GetFoliosOk returns a tuple with the Folios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolios

`func (o *LinkedHotelReservationType) SetFolios(v []FolioShortInfoType)`

SetFolios sets Folios field to given value.

### HasFolios

`func (o *LinkedHotelReservationType) HasFolios() bool`

HasFolios returns a boolean if a field has been set.

### GetGuestComments

`func (o *LinkedHotelReservationType) GetGuestComments() []CommentInfoType`

GetGuestComments returns the GuestComments field if non-nil, zero value otherwise.

### GetGuestCommentsOk

`func (o *LinkedHotelReservationType) GetGuestCommentsOk() (*[]CommentInfoType, bool)`

GetGuestCommentsOk returns a tuple with the GuestComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestComments

`func (o *LinkedHotelReservationType) SetGuestComments(v []CommentInfoType)`

SetGuestComments sets GuestComments field to given value.

### HasGuestComments

`func (o *LinkedHotelReservationType) HasGuestComments() bool`

HasGuestComments returns a boolean if a field has been set.

### GetGuestMemberships

`func (o *LinkedHotelReservationType) GetGuestMemberships() []MembershipType`

GetGuestMemberships returns the GuestMemberships field if non-nil, zero value otherwise.

### GetGuestMembershipsOk

`func (o *LinkedHotelReservationType) GetGuestMembershipsOk() (*[]MembershipType, bool)`

GetGuestMembershipsOk returns a tuple with the GuestMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMemberships

`func (o *LinkedHotelReservationType) SetGuestMemberships(v []MembershipType)`

SetGuestMemberships sets GuestMemberships field to given value.

### HasGuestMemberships

`func (o *LinkedHotelReservationType) HasGuestMemberships() bool`

HasGuestMemberships returns a boolean if a field has been set.

### GetGuestMessages

`func (o *LinkedHotelReservationType) GetGuestMessages() []GuestMessageType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *LinkedHotelReservationType) GetGuestMessagesOk() (*[]GuestMessageType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *LinkedHotelReservationType) SetGuestMessages(v []GuestMessageType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *LinkedHotelReservationType) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetHasOpenFolio

`func (o *LinkedHotelReservationType) GetHasOpenFolio() bool`

GetHasOpenFolio returns the HasOpenFolio field if non-nil, zero value otherwise.

### GetHasOpenFolioOk

`func (o *LinkedHotelReservationType) GetHasOpenFolioOk() (*bool, bool)`

GetHasOpenFolioOk returns a tuple with the HasOpenFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasOpenFolio

`func (o *LinkedHotelReservationType) SetHasOpenFolio(v bool)`

SetHasOpenFolio sets HasOpenFolio field to given value.

### HasHasOpenFolio

`func (o *LinkedHotelReservationType) HasHasOpenFolio() bool`

HasHasOpenFolio returns a boolean if a field has been set.

### GetHotelId

`func (o *LinkedHotelReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *LinkedHotelReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *LinkedHotelReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *LinkedHotelReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHousekeeping

`func (o *LinkedHotelReservationType) GetHousekeeping() ResHousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *LinkedHotelReservationType) GetHousekeepingOk() (*ResHousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *LinkedHotelReservationType) SetHousekeeping(v ResHousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *LinkedHotelReservationType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetInventoryItems

`func (o *LinkedHotelReservationType) GetInventoryItems() ResInventoryItemsType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *LinkedHotelReservationType) GetInventoryItemsOk() (*ResInventoryItemsType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *LinkedHotelReservationType) SetInventoryItems(v ResInventoryItemsType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *LinkedHotelReservationType) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetLastModifierId

`func (o *LinkedHotelReservationType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *LinkedHotelReservationType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *LinkedHotelReservationType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *LinkedHotelReservationType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *LinkedHotelReservationType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *LinkedHotelReservationType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *LinkedHotelReservationType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *LinkedHotelReservationType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLinkReservationType

`func (o *LinkedHotelReservationType) GetLinkReservationType() LinkedReservationType`

GetLinkReservationType returns the LinkReservationType field if non-nil, zero value otherwise.

### GetLinkReservationTypeOk

`func (o *LinkedHotelReservationType) GetLinkReservationTypeOk() (*LinkedReservationType, bool)`

GetLinkReservationTypeOk returns a tuple with the LinkReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkReservationType

`func (o *LinkedHotelReservationType) SetLinkReservationType(v LinkedReservationType)`

SetLinkReservationType sets LinkReservationType field to given value.

### HasLinkReservationType

`func (o *LinkedHotelReservationType) HasLinkReservationType() bool`

HasLinkReservationType returns a boolean if a field has been set.

### GetLinkedReservation

`func (o *LinkedHotelReservationType) GetLinkedReservation() LinkedReservationsInfoType`

GetLinkedReservation returns the LinkedReservation field if non-nil, zero value otherwise.

### GetLinkedReservationOk

`func (o *LinkedHotelReservationType) GetLinkedReservationOk() (*LinkedReservationsInfoType, bool)`

GetLinkedReservationOk returns a tuple with the LinkedReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedReservation

`func (o *LinkedHotelReservationType) SetLinkedReservation(v LinkedReservationsInfoType)`

SetLinkedReservation sets LinkedReservation field to given value.

### HasLinkedReservation

`func (o *LinkedHotelReservationType) HasLinkedReservation() bool`

HasLinkedReservation returns a boolean if a field has been set.

### GetLocators

`func (o *LinkedHotelReservationType) GetLocators() []ReservationLocatorType`

GetLocators returns the Locators field if non-nil, zero value otherwise.

### GetLocatorsOk

`func (o *LinkedHotelReservationType) GetLocatorsOk() (*[]ReservationLocatorType, bool)`

GetLocatorsOk returns a tuple with the Locators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocators

`func (o *LinkedHotelReservationType) SetLocators(v []ReservationLocatorType)`

SetLocators sets Locators field to given value.

### HasLocators

`func (o *LinkedHotelReservationType) HasLocators() bool`

HasLocators returns a boolean if a field has been set.

### GetLockHandle

`func (o *LinkedHotelReservationType) GetLockHandle() float32`

GetLockHandle returns the LockHandle field if non-nil, zero value otherwise.

### GetLockHandleOk

`func (o *LinkedHotelReservationType) GetLockHandleOk() (*float32, bool)`

GetLockHandleOk returns a tuple with the LockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockHandle

`func (o *LinkedHotelReservationType) SetLockHandle(v float32)`

SetLockHandle sets LockHandle field to given value.

### HasLockHandle

`func (o *LinkedHotelReservationType) HasLockHandle() bool`

HasLockHandle returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *LinkedHotelReservationType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *LinkedHotelReservationType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *LinkedHotelReservationType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *LinkedHotelReservationType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetOptedForCommunication

`func (o *LinkedHotelReservationType) GetOptedForCommunication() bool`

GetOptedForCommunication returns the OptedForCommunication field if non-nil, zero value otherwise.

### GetOptedForCommunicationOk

`func (o *LinkedHotelReservationType) GetOptedForCommunicationOk() (*bool, bool)`

GetOptedForCommunicationOk returns a tuple with the OptedForCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptedForCommunication

`func (o *LinkedHotelReservationType) SetOptedForCommunication(v bool)`

SetOptedForCommunication sets OptedForCommunication field to given value.

### HasOptedForCommunication

`func (o *LinkedHotelReservationType) HasOptedForCommunication() bool`

HasOptedForCommunication returns a boolean if a field has been set.

### GetOverrideBlockRestriction

`func (o *LinkedHotelReservationType) GetOverrideBlockRestriction() bool`

GetOverrideBlockRestriction returns the OverrideBlockRestriction field if non-nil, zero value otherwise.

### GetOverrideBlockRestrictionOk

`func (o *LinkedHotelReservationType) GetOverrideBlockRestrictionOk() (*bool, bool)`

GetOverrideBlockRestrictionOk returns a tuple with the OverrideBlockRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideBlockRestriction

`func (o *LinkedHotelReservationType) SetOverrideBlockRestriction(v bool)`

SetOverrideBlockRestriction sets OverrideBlockRestriction field to given value.

### HasOverrideBlockRestriction

`func (o *LinkedHotelReservationType) HasOverrideBlockRestriction() bool`

HasOverrideBlockRestriction returns a boolean if a field has been set.

### GetOverrideExternalChecks

`func (o *LinkedHotelReservationType) GetOverrideExternalChecks() bool`

GetOverrideExternalChecks returns the OverrideExternalChecks field if non-nil, zero value otherwise.

### GetOverrideExternalChecksOk

`func (o *LinkedHotelReservationType) GetOverrideExternalChecksOk() (*bool, bool)`

GetOverrideExternalChecksOk returns a tuple with the OverrideExternalChecks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideExternalChecks

`func (o *LinkedHotelReservationType) SetOverrideExternalChecks(v bool)`

SetOverrideExternalChecks sets OverrideExternalChecks field to given value.

### HasOverrideExternalChecks

`func (o *LinkedHotelReservationType) HasOverrideExternalChecks() bool`

HasOverrideExternalChecks returns a boolean if a field has been set.

### GetOverrideInstructions

`func (o *LinkedHotelReservationType) GetOverrideInstructions() []OverrideInstructionType`

GetOverrideInstructions returns the OverrideInstructions field if non-nil, zero value otherwise.

### GetOverrideInstructionsOk

`func (o *LinkedHotelReservationType) GetOverrideInstructionsOk() (*[]OverrideInstructionType, bool)`

GetOverrideInstructionsOk returns a tuple with the OverrideInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInstructions

`func (o *LinkedHotelReservationType) SetOverrideInstructions(v []OverrideInstructionType)`

SetOverrideInstructions sets OverrideInstructions field to given value.

### HasOverrideInstructions

`func (o *LinkedHotelReservationType) HasOverrideInstructions() bool`

HasOverrideInstructions returns a boolean if a field has been set.

### GetOverrideInventoryCheck

`func (o *LinkedHotelReservationType) GetOverrideInventoryCheck() bool`

GetOverrideInventoryCheck returns the OverrideInventoryCheck field if non-nil, zero value otherwise.

### GetOverrideInventoryCheckOk

`func (o *LinkedHotelReservationType) GetOverrideInventoryCheckOk() (*bool, bool)`

GetOverrideInventoryCheckOk returns a tuple with the OverrideInventoryCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventoryCheck

`func (o *LinkedHotelReservationType) SetOverrideInventoryCheck(v bool)`

SetOverrideInventoryCheck sets OverrideInventoryCheck field to given value.

### HasOverrideInventoryCheck

`func (o *LinkedHotelReservationType) HasOverrideInventoryCheck() bool`

HasOverrideInventoryCheck returns a boolean if a field has been set.

### GetOverrideOutOfServiceCheck

`func (o *LinkedHotelReservationType) GetOverrideOutOfServiceCheck() bool`

GetOverrideOutOfServiceCheck returns the OverrideOutOfServiceCheck field if non-nil, zero value otherwise.

### GetOverrideOutOfServiceCheckOk

`func (o *LinkedHotelReservationType) GetOverrideOutOfServiceCheckOk() (*bool, bool)`

GetOverrideOutOfServiceCheckOk returns a tuple with the OverrideOutOfServiceCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideOutOfServiceCheck

`func (o *LinkedHotelReservationType) SetOverrideOutOfServiceCheck(v bool)`

SetOverrideOutOfServiceCheck sets OverrideOutOfServiceCheck field to given value.

### HasOverrideOutOfServiceCheck

`func (o *LinkedHotelReservationType) HasOverrideOutOfServiceCheck() bool`

HasOverrideOutOfServiceCheck returns a boolean if a field has been set.

### GetParty

`func (o *LinkedHotelReservationType) GetParty() string`

GetParty returns the Party field if non-nil, zero value otherwise.

### GetPartyOk

`func (o *LinkedHotelReservationType) GetPartyOk() (*string, bool)`

GetPartyOk returns a tuple with the Party field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParty

`func (o *LinkedHotelReservationType) SetParty(v string)`

SetParty sets Party field to given value.

### HasParty

`func (o *LinkedHotelReservationType) HasParty() bool`

HasParty returns a boolean if a field has been set.

### GetPreRegistered

`func (o *LinkedHotelReservationType) GetPreRegistered() bool`

GetPreRegistered returns the PreRegistered field if non-nil, zero value otherwise.

### GetPreRegisteredOk

`func (o *LinkedHotelReservationType) GetPreRegisteredOk() (*bool, bool)`

GetPreRegisteredOk returns a tuple with the PreRegistered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreRegistered

`func (o *LinkedHotelReservationType) SetPreRegistered(v bool)`

SetPreRegistered sets PreRegistered field to given value.

### HasPreRegistered

`func (o *LinkedHotelReservationType) HasPreRegistered() bool`

HasPreRegistered returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *LinkedHotelReservationType) GetPreferenceCollection() []PreferenceTypeType`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *LinkedHotelReservationType) GetPreferenceCollectionOk() (*[]PreferenceTypeType, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *LinkedHotelReservationType) SetPreferenceCollection(v []PreferenceTypeType)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *LinkedHotelReservationType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetPrepaidCards

`func (o *LinkedHotelReservationType) GetPrepaidCards() []PrepaidCardType`

GetPrepaidCards returns the PrepaidCards field if non-nil, zero value otherwise.

### GetPrepaidCardsOk

`func (o *LinkedHotelReservationType) GetPrepaidCardsOk() (*[]PrepaidCardType, bool)`

GetPrepaidCardsOk returns a tuple with the PrepaidCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCards

`func (o *LinkedHotelReservationType) SetPrepaidCards(v []PrepaidCardType)`

SetPrepaidCards sets PrepaidCards field to given value.

### HasPrepaidCards

`func (o *LinkedHotelReservationType) HasPrepaidCards() bool`

HasPrepaidCards returns a boolean if a field has been set.

### GetPrimaryEnrollmentChain

`func (o *LinkedHotelReservationType) GetPrimaryEnrollmentChain() string`

GetPrimaryEnrollmentChain returns the PrimaryEnrollmentChain field if non-nil, zero value otherwise.

### GetPrimaryEnrollmentChainOk

`func (o *LinkedHotelReservationType) GetPrimaryEnrollmentChainOk() (*string, bool)`

GetPrimaryEnrollmentChainOk returns a tuple with the PrimaryEnrollmentChain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEnrollmentChain

`func (o *LinkedHotelReservationType) SetPrimaryEnrollmentChain(v string)`

SetPrimaryEnrollmentChain sets PrimaryEnrollmentChain field to given value.

### HasPrimaryEnrollmentChain

`func (o *LinkedHotelReservationType) HasPrimaryEnrollmentChain() bool`

HasPrimaryEnrollmentChain returns a boolean if a field has been set.

### GetPrimaryEnrollmentResort

`func (o *LinkedHotelReservationType) GetPrimaryEnrollmentResort() string`

GetPrimaryEnrollmentResort returns the PrimaryEnrollmentResort field if non-nil, zero value otherwise.

### GetPrimaryEnrollmentResortOk

`func (o *LinkedHotelReservationType) GetPrimaryEnrollmentResortOk() (*string, bool)`

GetPrimaryEnrollmentResortOk returns a tuple with the PrimaryEnrollmentResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryEnrollmentResort

`func (o *LinkedHotelReservationType) SetPrimaryEnrollmentResort(v string)`

SetPrimaryEnrollmentResort sets PrimaryEnrollmentResort field to given value.

### HasPrimaryEnrollmentResort

`func (o *LinkedHotelReservationType) HasPrimaryEnrollmentResort() bool`

HasPrimaryEnrollmentResort returns a boolean if a field has been set.

### GetPrintRate

`func (o *LinkedHotelReservationType) GetPrintRate() bool`

GetPrintRate returns the PrintRate field if non-nil, zero value otherwise.

### GetPrintRateOk

`func (o *LinkedHotelReservationType) GetPrintRateOk() (*bool, bool)`

GetPrintRateOk returns a tuple with the PrintRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintRate

`func (o *LinkedHotelReservationType) SetPrintRate(v bool)`

SetPrintRate sets PrintRate field to given value.

### HasPrintRate

`func (o *LinkedHotelReservationType) HasPrintRate() bool`

HasPrintRate returns a boolean if a field has been set.

### GetProfileAwards

`func (o *LinkedHotelReservationType) GetProfileAwards() []AwardType`

GetProfileAwards returns the ProfileAwards field if non-nil, zero value otherwise.

### GetProfileAwardsOk

`func (o *LinkedHotelReservationType) GetProfileAwardsOk() (*[]AwardType, bool)`

GetProfileAwardsOk returns a tuple with the ProfileAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAwards

`func (o *LinkedHotelReservationType) SetProfileAwards(v []AwardType)`

SetProfileAwards sets ProfileAwards field to given value.

### HasProfileAwards

`func (o *LinkedHotelReservationType) HasProfileAwards() bool`

HasProfileAwards returns a boolean if a field has been set.

### GetPurgeDate

`func (o *LinkedHotelReservationType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *LinkedHotelReservationType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *LinkedHotelReservationType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *LinkedHotelReservationType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetQueue

`func (o *LinkedHotelReservationType) GetQueue() ReservationQueueInformationType`

GetQueue returns the Queue field if non-nil, zero value otherwise.

### GetQueueOk

`func (o *LinkedHotelReservationType) GetQueueOk() (*ReservationQueueInformationType, bool)`

GetQueueOk returns a tuple with the Queue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueue

`func (o *LinkedHotelReservationType) SetQueue(v ReservationQueueInformationType)`

SetQueue sets Queue field to given value.

### HasQueue

`func (o *LinkedHotelReservationType) HasQueue() bool`

HasQueue returns a boolean if a field has been set.

### GetReinstateDate

`func (o *LinkedHotelReservationType) GetReinstateDate() string`

GetReinstateDate returns the ReinstateDate field if non-nil, zero value otherwise.

### GetReinstateDateOk

`func (o *LinkedHotelReservationType) GetReinstateDateOk() (*string, bool)`

GetReinstateDateOk returns a tuple with the ReinstateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReinstateDate

`func (o *LinkedHotelReservationType) SetReinstateDate(v string)`

SetReinstateDate sets ReinstateDate field to given value.

### HasReinstateDate

`func (o *LinkedHotelReservationType) HasReinstateDate() bool`

HasReinstateDate returns a boolean if a field has been set.

### GetReservationActivities

`func (o *LinkedHotelReservationType) GetReservationActivities() []FetchActivityBookingsType`

GetReservationActivities returns the ReservationActivities field if non-nil, zero value otherwise.

### GetReservationActivitiesOk

`func (o *LinkedHotelReservationType) GetReservationActivitiesOk() (*[]FetchActivityBookingsType, bool)`

GetReservationActivitiesOk returns a tuple with the ReservationActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationActivities

`func (o *LinkedHotelReservationType) SetReservationActivities(v []FetchActivityBookingsType)`

SetReservationActivities sets ReservationActivities field to given value.

### HasReservationActivities

`func (o *LinkedHotelReservationType) HasReservationActivities() bool`

HasReservationActivities returns a boolean if a field has been set.

### GetReservationAwards

`func (o *LinkedHotelReservationType) GetReservationAwards() []AwardType`

GetReservationAwards returns the ReservationAwards field if non-nil, zero value otherwise.

### GetReservationAwardsOk

`func (o *LinkedHotelReservationType) GetReservationAwardsOk() (*[]AwardType, bool)`

GetReservationAwardsOk returns a tuple with the ReservationAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationAwards

`func (o *LinkedHotelReservationType) SetReservationAwards(v []AwardType)`

SetReservationAwards sets ReservationAwards field to given value.

### HasReservationAwards

`func (o *LinkedHotelReservationType) HasReservationAwards() bool`

HasReservationAwards returns a boolean if a field has been set.

### GetReservationCommunication

`func (o *LinkedHotelReservationType) GetReservationCommunication() ResCommunicationType`

GetReservationCommunication returns the ReservationCommunication field if non-nil, zero value otherwise.

### GetReservationCommunicationOk

`func (o *LinkedHotelReservationType) GetReservationCommunicationOk() (*ResCommunicationType, bool)`

GetReservationCommunicationOk returns a tuple with the ReservationCommunication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCommunication

`func (o *LinkedHotelReservationType) SetReservationCommunication(v ResCommunicationType)`

SetReservationCommunication sets ReservationCommunication field to given value.

### HasReservationCommunication

`func (o *LinkedHotelReservationType) HasReservationCommunication() bool`

HasReservationCommunication returns a boolean if a field has been set.

### GetReservationGuests

`func (o *LinkedHotelReservationType) GetReservationGuests() []ResGuestType`

GetReservationGuests returns the ReservationGuests field if non-nil, zero value otherwise.

### GetReservationGuestsOk

`func (o *LinkedHotelReservationType) GetReservationGuestsOk() (*[]ResGuestType, bool)`

GetReservationGuestsOk returns a tuple with the ReservationGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuests

`func (o *LinkedHotelReservationType) SetReservationGuests(v []ResGuestType)`

SetReservationGuests sets ReservationGuests field to given value.

### HasReservationGuests

`func (o *LinkedHotelReservationType) HasReservationGuests() bool`

HasReservationGuests returns a boolean if a field has been set.

### GetReservationIdList

`func (o *LinkedHotelReservationType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *LinkedHotelReservationType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *LinkedHotelReservationType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *LinkedHotelReservationType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationIndicators

`func (o *LinkedHotelReservationType) GetReservationIndicators() []IndicatorType`

GetReservationIndicators returns the ReservationIndicators field if non-nil, zero value otherwise.

### GetReservationIndicatorsOk

`func (o *LinkedHotelReservationType) GetReservationIndicatorsOk() (*[]IndicatorType, bool)`

GetReservationIndicatorsOk returns a tuple with the ReservationIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIndicators

`func (o *LinkedHotelReservationType) SetReservationIndicators(v []IndicatorType)`

SetReservationIndicators sets ReservationIndicators field to given value.

### HasReservationIndicators

`func (o *LinkedHotelReservationType) HasReservationIndicators() bool`

HasReservationIndicators returns a boolean if a field has been set.

### GetReservationMemberships

`func (o *LinkedHotelReservationType) GetReservationMemberships() []ReservationMembershipType`

GetReservationMemberships returns the ReservationMemberships field if non-nil, zero value otherwise.

### GetReservationMembershipsOk

`func (o *LinkedHotelReservationType) GetReservationMembershipsOk() (*[]ReservationMembershipType, bool)`

GetReservationMembershipsOk returns a tuple with the ReservationMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMemberships

`func (o *LinkedHotelReservationType) SetReservationMemberships(v []ReservationMembershipType)`

SetReservationMemberships sets ReservationMemberships field to given value.

### HasReservationMemberships

`func (o *LinkedHotelReservationType) HasReservationMemberships() bool`

HasReservationMemberships returns a boolean if a field has been set.

### GetReservationPackages

`func (o *LinkedHotelReservationType) GetReservationPackages() []ReservationPackageType`

GetReservationPackages returns the ReservationPackages field if non-nil, zero value otherwise.

### GetReservationPackagesOk

`func (o *LinkedHotelReservationType) GetReservationPackagesOk() (*[]ReservationPackageType, bool)`

GetReservationPackagesOk returns a tuple with the ReservationPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackages

`func (o *LinkedHotelReservationType) SetReservationPackages(v []ReservationPackageType)`

SetReservationPackages sets ReservationPackages field to given value.

### HasReservationPackages

`func (o *LinkedHotelReservationType) HasReservationPackages() bool`

HasReservationPackages returns a boolean if a field has been set.

### GetReservationPaymentMethods

`func (o *LinkedHotelReservationType) GetReservationPaymentMethods() []ReservationPaymentMethodType`

GetReservationPaymentMethods returns the ReservationPaymentMethods field if non-nil, zero value otherwise.

### GetReservationPaymentMethodsOk

`func (o *LinkedHotelReservationType) GetReservationPaymentMethodsOk() (*[]ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethods

`func (o *LinkedHotelReservationType) SetReservationPaymentMethods(v []ReservationPaymentMethodType)`

SetReservationPaymentMethods sets ReservationPaymentMethods field to given value.

### HasReservationPaymentMethods

`func (o *LinkedHotelReservationType) HasReservationPaymentMethods() bool`

HasReservationPaymentMethods returns a boolean if a field has been set.

### GetReservationPolicies

`func (o *LinkedHotelReservationType) GetReservationPolicies() ReservationPoliciesType`

GetReservationPolicies returns the ReservationPolicies field if non-nil, zero value otherwise.

### GetReservationPoliciesOk

`func (o *LinkedHotelReservationType) GetReservationPoliciesOk() (*ReservationPoliciesType, bool)`

GetReservationPoliciesOk returns a tuple with the ReservationPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPolicies

`func (o *LinkedHotelReservationType) SetReservationPolicies(v ReservationPoliciesType)`

SetReservationPolicies sets ReservationPolicies field to given value.

### HasReservationPolicies

`func (o *LinkedHotelReservationType) HasReservationPolicies() bool`

HasReservationPolicies returns a boolean if a field has been set.

### GetReservationProfiles

`func (o *LinkedHotelReservationType) GetReservationProfiles() HotelReservationInstructionTypeReservationProfiles`

GetReservationProfiles returns the ReservationProfiles field if non-nil, zero value otherwise.

### GetReservationProfilesOk

`func (o *LinkedHotelReservationType) GetReservationProfilesOk() (*HotelReservationInstructionTypeReservationProfiles, bool)`

GetReservationProfilesOk returns a tuple with the ReservationProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfiles

`func (o *LinkedHotelReservationType) SetReservationProfiles(v HotelReservationInstructionTypeReservationProfiles)`

SetReservationProfiles sets ReservationProfiles field to given value.

### HasReservationProfiles

`func (o *LinkedHotelReservationType) HasReservationProfiles() bool`

HasReservationProfiles returns a boolean if a field has been set.

### GetReservationStatus

`func (o *LinkedHotelReservationType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *LinkedHotelReservationType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *LinkedHotelReservationType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *LinkedHotelReservationType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRoomStay

`func (o *LinkedHotelReservationType) GetRoomStay() RoomStayType`

GetRoomStay returns the RoomStay field if non-nil, zero value otherwise.

### GetRoomStayOk

`func (o *LinkedHotelReservationType) GetRoomStayOk() (*RoomStayType, bool)`

GetRoomStayOk returns a tuple with the RoomStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStay

`func (o *LinkedHotelReservationType) SetRoomStay(v RoomStayType)`

SetRoomStay sets RoomStay field to given value.

### HasRoomStay

`func (o *LinkedHotelReservationType) HasRoomStay() bool`

HasRoomStay returns a boolean if a field has been set.

### GetRoomStayReservation

`func (o *LinkedHotelReservationType) GetRoomStayReservation() bool`

GetRoomStayReservation returns the RoomStayReservation field if non-nil, zero value otherwise.

### GetRoomStayReservationOk

`func (o *LinkedHotelReservationType) GetRoomStayReservationOk() (*bool, bool)`

GetRoomStayReservationOk returns a tuple with the RoomStayReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStayReservation

`func (o *LinkedHotelReservationType) SetRoomStayReservation(v bool)`

SetRoomStayReservation sets RoomStayReservation field to given value.

### HasRoomStayReservation

`func (o *LinkedHotelReservationType) HasRoomStayReservation() bool`

HasRoomStayReservation returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *LinkedHotelReservationType) GetRoutingInstructions() []RoutingInfoType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *LinkedHotelReservationType) GetRoutingInstructionsOk() (*[]RoutingInfoType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *LinkedHotelReservationType) SetRoutingInstructions(v []RoutingInfoType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *LinkedHotelReservationType) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetScheduledActivities

`func (o *LinkedHotelReservationType) GetScheduledActivities() []FetchActivityBookingsType`

GetScheduledActivities returns the ScheduledActivities field if non-nil, zero value otherwise.

### GetScheduledActivitiesOk

`func (o *LinkedHotelReservationType) GetScheduledActivitiesOk() (*[]FetchActivityBookingsType, bool)`

GetScheduledActivitiesOk returns a tuple with the ScheduledActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledActivities

`func (o *LinkedHotelReservationType) SetScheduledActivities(v []FetchActivityBookingsType)`

SetScheduledActivities sets ScheduledActivities field to given value.

### HasScheduledActivities

`func (o *LinkedHotelReservationType) HasScheduledActivities() bool`

HasScheduledActivities returns a boolean if a field has been set.

### GetServiceRequests

`func (o *LinkedHotelReservationType) GetServiceRequests() []ServiceRequest`

GetServiceRequests returns the ServiceRequests field if non-nil, zero value otherwise.

### GetServiceRequestsOk

`func (o *LinkedHotelReservationType) GetServiceRequestsOk() (*[]ServiceRequest, bool)`

GetServiceRequestsOk returns a tuple with the ServiceRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequests

`func (o *LinkedHotelReservationType) SetServiceRequests(v []ServiceRequest)`

SetServiceRequests sets ServiceRequests field to given value.

### HasServiceRequests

`func (o *LinkedHotelReservationType) HasServiceRequests() bool`

HasServiceRequests returns a boolean if a field has been set.

### GetSharedGuests

`func (o *LinkedHotelReservationType) GetSharedGuests() []ResSharedGuestInfoType`

GetSharedGuests returns the SharedGuests field if non-nil, zero value otherwise.

### GetSharedGuestsOk

`func (o *LinkedHotelReservationType) GetSharedGuestsOk() (*[]ResSharedGuestInfoType, bool)`

GetSharedGuestsOk returns a tuple with the SharedGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedGuests

`func (o *LinkedHotelReservationType) SetSharedGuests(v []ResSharedGuestInfoType)`

SetSharedGuests sets SharedGuests field to given value.

### HasSharedGuests

`func (o *LinkedHotelReservationType) HasSharedGuests() bool`

HasSharedGuests returns a boolean if a field has been set.

### GetShares

`func (o *LinkedHotelReservationType) GetShares() HotelReservationsType`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *LinkedHotelReservationType) GetSharesOk() (*HotelReservationsType, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *LinkedHotelReservationType) SetShares(v HotelReservationsType)`

SetShares sets Shares field to given value.

### HasShares

`func (o *LinkedHotelReservationType) HasShares() bool`

HasShares returns a boolean if a field has been set.

### GetSourceOfSale

`func (o *LinkedHotelReservationType) GetSourceOfSale() SourceOfSaleType`

GetSourceOfSale returns the SourceOfSale field if non-nil, zero value otherwise.

### GetSourceOfSaleOk

`func (o *LinkedHotelReservationType) GetSourceOfSaleOk() (*SourceOfSaleType, bool)`

GetSourceOfSaleOk returns a tuple with the SourceOfSale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfSale

`func (o *LinkedHotelReservationType) SetSourceOfSale(v SourceOfSaleType)`

SetSourceOfSale sets SourceOfSale field to given value.

### HasSourceOfSale

`func (o *LinkedHotelReservationType) HasSourceOfSale() bool`

HasSourceOfSale returns a boolean if a field has been set.

### GetStatisticalClassification

`func (o *LinkedHotelReservationType) GetStatisticalClassification() ResStatClassificationType`

GetStatisticalClassification returns the StatisticalClassification field if non-nil, zero value otherwise.

### GetStatisticalClassificationOk

`func (o *LinkedHotelReservationType) GetStatisticalClassificationOk() (*ResStatClassificationType, bool)`

GetStatisticalClassificationOk returns a tuple with the StatisticalClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticalClassification

`func (o *LinkedHotelReservationType) SetStatisticalClassification(v ResStatClassificationType)`

SetStatisticalClassification sets StatisticalClassification field to given value.

### HasStatisticalClassification

`func (o *LinkedHotelReservationType) HasStatisticalClassification() bool`

HasStatisticalClassification returns a boolean if a field has been set.

### GetTickets

`func (o *LinkedHotelReservationType) GetTickets() []TicketType`

GetTickets returns the Tickets field if non-nil, zero value otherwise.

### GetTicketsOk

`func (o *LinkedHotelReservationType) GetTicketsOk() (*[]TicketType, bool)`

GetTicketsOk returns a tuple with the Tickets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTickets

`func (o *LinkedHotelReservationType) SetTickets(v []TicketType)`

SetTickets sets Tickets field to given value.

### HasTickets

`func (o *LinkedHotelReservationType) HasTickets() bool`

HasTickets returns a boolean if a field has been set.

### GetTraces

`func (o *LinkedHotelReservationType) GetTraces() []HotelReservationTraceType`

GetTraces returns the Traces field if non-nil, zero value otherwise.

### GetTracesOk

`func (o *LinkedHotelReservationType) GetTracesOk() (*[]HotelReservationTraceType, bool)`

GetTracesOk returns a tuple with the Traces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraces

`func (o *LinkedHotelReservationType) SetTraces(v []HotelReservationTraceType)`

SetTraces sets Traces field to given value.

### HasTraces

`func (o *LinkedHotelReservationType) HasTraces() bool`

HasTraces returns a boolean if a field has been set.

### GetTrackItItems

`func (o *LinkedHotelReservationType) GetTrackItItems() []TrackItItemType`

GetTrackItItems returns the TrackItItems field if non-nil, zero value otherwise.

### GetTrackItItemsOk

`func (o *LinkedHotelReservationType) GetTrackItItemsOk() (*[]TrackItItemType, bool)`

GetTrackItItemsOk returns a tuple with the TrackItItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItItems

`func (o *LinkedHotelReservationType) SetTrackItItems(v []TrackItItemType)`

SetTrackItItems sets TrackItItems field to given value.

### HasTrackItItems

`func (o *LinkedHotelReservationType) HasTrackItItems() bool`

HasTrackItItems returns a boolean if a field has been set.

### GetTransactionDiversions

`func (o *LinkedHotelReservationType) GetTransactionDiversions() HotelReservationInstructionTypeTransactionDiversions`

GetTransactionDiversions returns the TransactionDiversions field if non-nil, zero value otherwise.

### GetTransactionDiversionsOk

`func (o *LinkedHotelReservationType) GetTransactionDiversionsOk() (*HotelReservationInstructionTypeTransactionDiversions, bool)`

GetTransactionDiversionsOk returns a tuple with the TransactionDiversions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDiversions

`func (o *LinkedHotelReservationType) SetTransactionDiversions(v HotelReservationInstructionTypeTransactionDiversions)`

SetTransactionDiversions sets TransactionDiversions field to given value.

### HasTransactionDiversions

`func (o *LinkedHotelReservationType) HasTransactionDiversions() bool`

HasTransactionDiversions returns a boolean if a field has been set.

### GetUpgradeEligible

`func (o *LinkedHotelReservationType) GetUpgradeEligible() bool`

GetUpgradeEligible returns the UpgradeEligible field if non-nil, zero value otherwise.

### GetUpgradeEligibleOk

`func (o *LinkedHotelReservationType) GetUpgradeEligibleOk() (*bool, bool)`

GetUpgradeEligibleOk returns a tuple with the UpgradeEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeEligible

`func (o *LinkedHotelReservationType) SetUpgradeEligible(v bool)`

SetUpgradeEligible sets UpgradeEligible field to given value.

### HasUpgradeEligible

`func (o *LinkedHotelReservationType) HasUpgradeEligible() bool`

HasUpgradeEligible returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *LinkedHotelReservationType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *LinkedHotelReservationType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *LinkedHotelReservationType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *LinkedHotelReservationType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWaitlist

`func (o *LinkedHotelReservationType) GetWaitlist() WaitlistResType`

GetWaitlist returns the Waitlist field if non-nil, zero value otherwise.

### GetWaitlistOk

`func (o *LinkedHotelReservationType) GetWaitlistOk() (*WaitlistResType, bool)`

GetWaitlistOk returns a tuple with the Waitlist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlist

`func (o *LinkedHotelReservationType) SetWaitlist(v WaitlistResType)`

SetWaitlist sets Waitlist field to given value.

### HasWaitlist

`func (o *LinkedHotelReservationType) HasWaitlist() bool`

HasWaitlist returns a boolean if a field has been set.

### GetWalkIn

`func (o *LinkedHotelReservationType) GetWalkIn() bool`

GetWalkIn returns the WalkIn field if non-nil, zero value otherwise.

### GetWalkInOk

`func (o *LinkedHotelReservationType) GetWalkInOk() (*bool, bool)`

GetWalkInOk returns a tuple with the WalkIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalkIn

`func (o *LinkedHotelReservationType) SetWalkIn(v bool)`

SetWalkIn sets WalkIn field to given value.

### HasWalkIn

`func (o *LinkedHotelReservationType) HasWalkIn() bool`

HasWalkIn returns a boolean if a field has been set.

### GetWebRegistrationCards

`func (o *LinkedHotelReservationType) GetWebRegistrationCards() []AttachmentType`

GetWebRegistrationCards returns the WebRegistrationCards field if non-nil, zero value otherwise.

### GetWebRegistrationCardsOk

`func (o *LinkedHotelReservationType) GetWebRegistrationCardsOk() (*[]AttachmentType, bool)`

GetWebRegistrationCardsOk returns a tuple with the WebRegistrationCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebRegistrationCards

`func (o *LinkedHotelReservationType) SetWebRegistrationCards(v []AttachmentType)`

SetWebRegistrationCards sets WebRegistrationCards field to given value.

### HasWebRegistrationCards

`func (o *LinkedHotelReservationType) HasWebRegistrationCards() bool`

HasWebRegistrationCards returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

