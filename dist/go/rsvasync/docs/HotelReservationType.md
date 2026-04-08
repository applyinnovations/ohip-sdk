# HotelReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**Shares** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**Comments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the reservation. | [optional] 
**GuestComments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the profile. | [optional] 
**SharedGuests** | Pointer to [**[]ResSharedGuestInfoType**](ResSharedGuestInfoType.md) | Collection of shared guest reservations. | [optional] 
**RoomStay** | Pointer to [**RoomStayType**](RoomStayType.md) |  | [optional] 
**ReservationGuests** | Pointer to [**[]ResGuestType**](ResGuestType.md) | Collection of guests associated with the reservation. | [optional] 
**ReservationPackages** | Pointer to [**[]ReservationPackageType**](ReservationPackageType.md) | A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges. | [optional] 
**PreferenceCollection** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Collection of reservation preferences. | [optional] 
**ReservationProfiles** | Pointer to [**HotelReservationTypeReservationProfiles**](HotelReservationTypeReservationProfiles.md) |  | [optional] 
**ReservationPaymentMethods** | Pointer to [**[]ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**Cashiering** | Pointer to [**ResCashieringType**](ResCashieringType.md) |  | [optional] 
**ExtSystemSync** | Pointer to **bool** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**OverrideBlockRestriction** | Pointer to **bool** |  | [optional] 
**AdditionalGuestInfo** | Pointer to [**ResGuestAdditionalInfoType**](ResGuestAdditionalInfoType.md) |  | [optional] 
**OverrideExternalChecks** | Pointer to **bool** | Forcefully override the create/update action on the Reservation. For real-time CRS interfaces, this element is used as force selling indicator in case of Create or Update Reservation | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**FixedCharges** | Pointer to [**[]FixedChargeType**](FixedChargeType.md) | Holds fixed charge detail. | [optional] 

## Methods

### NewHotelReservationType

`func NewHotelReservationType() *HotelReservationType`

NewHotelReservationType instantiates a new HotelReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelReservationTypeWithDefaults

`func NewHotelReservationTypeWithDefaults() *HotelReservationType`

NewHotelReservationTypeWithDefaults instantiates a new HotelReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *HotelReservationType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *HotelReservationType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *HotelReservationType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *HotelReservationType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *HotelReservationType) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *HotelReservationType) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *HotelReservationType) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *HotelReservationType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetShares

`func (o *HotelReservationType) GetShares() HotelReservationsType`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *HotelReservationType) GetSharesOk() (*HotelReservationsType, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *HotelReservationType) SetShares(v HotelReservationsType)`

SetShares sets Shares field to given value.

### HasShares

`func (o *HotelReservationType) HasShares() bool`

HasShares returns a boolean if a field has been set.

### GetComments

`func (o *HotelReservationType) GetComments() []CommentInfoType`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *HotelReservationType) GetCommentsOk() (*[]CommentInfoType, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *HotelReservationType) SetComments(v []CommentInfoType)`

SetComments sets Comments field to given value.

### HasComments

`func (o *HotelReservationType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetGuestComments

`func (o *HotelReservationType) GetGuestComments() []CommentInfoType`

GetGuestComments returns the GuestComments field if non-nil, zero value otherwise.

### GetGuestCommentsOk

`func (o *HotelReservationType) GetGuestCommentsOk() (*[]CommentInfoType, bool)`

GetGuestCommentsOk returns a tuple with the GuestComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestComments

`func (o *HotelReservationType) SetGuestComments(v []CommentInfoType)`

SetGuestComments sets GuestComments field to given value.

### HasGuestComments

`func (o *HotelReservationType) HasGuestComments() bool`

HasGuestComments returns a boolean if a field has been set.

### GetSharedGuests

`func (o *HotelReservationType) GetSharedGuests() []ResSharedGuestInfoType`

GetSharedGuests returns the SharedGuests field if non-nil, zero value otherwise.

### GetSharedGuestsOk

`func (o *HotelReservationType) GetSharedGuestsOk() (*[]ResSharedGuestInfoType, bool)`

GetSharedGuestsOk returns a tuple with the SharedGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedGuests

`func (o *HotelReservationType) SetSharedGuests(v []ResSharedGuestInfoType)`

SetSharedGuests sets SharedGuests field to given value.

### HasSharedGuests

`func (o *HotelReservationType) HasSharedGuests() bool`

HasSharedGuests returns a boolean if a field has been set.

### GetRoomStay

`func (o *HotelReservationType) GetRoomStay() RoomStayType`

GetRoomStay returns the RoomStay field if non-nil, zero value otherwise.

### GetRoomStayOk

`func (o *HotelReservationType) GetRoomStayOk() (*RoomStayType, bool)`

GetRoomStayOk returns a tuple with the RoomStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStay

`func (o *HotelReservationType) SetRoomStay(v RoomStayType)`

SetRoomStay sets RoomStay field to given value.

### HasRoomStay

`func (o *HotelReservationType) HasRoomStay() bool`

HasRoomStay returns a boolean if a field has been set.

### GetReservationGuests

`func (o *HotelReservationType) GetReservationGuests() []ResGuestType`

GetReservationGuests returns the ReservationGuests field if non-nil, zero value otherwise.

### GetReservationGuestsOk

`func (o *HotelReservationType) GetReservationGuestsOk() (*[]ResGuestType, bool)`

GetReservationGuestsOk returns a tuple with the ReservationGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuests

`func (o *HotelReservationType) SetReservationGuests(v []ResGuestType)`

SetReservationGuests sets ReservationGuests field to given value.

### HasReservationGuests

`func (o *HotelReservationType) HasReservationGuests() bool`

HasReservationGuests returns a boolean if a field has been set.

### GetReservationPackages

`func (o *HotelReservationType) GetReservationPackages() []ReservationPackageType`

GetReservationPackages returns the ReservationPackages field if non-nil, zero value otherwise.

### GetReservationPackagesOk

`func (o *HotelReservationType) GetReservationPackagesOk() (*[]ReservationPackageType, bool)`

GetReservationPackagesOk returns a tuple with the ReservationPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackages

`func (o *HotelReservationType) SetReservationPackages(v []ReservationPackageType)`

SetReservationPackages sets ReservationPackages field to given value.

### HasReservationPackages

`func (o *HotelReservationType) HasReservationPackages() bool`

HasReservationPackages returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *HotelReservationType) GetPreferenceCollection() []PreferenceTypeType`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *HotelReservationType) GetPreferenceCollectionOk() (*[]PreferenceTypeType, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *HotelReservationType) SetPreferenceCollection(v []PreferenceTypeType)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *HotelReservationType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetReservationProfiles

`func (o *HotelReservationType) GetReservationProfiles() HotelReservationTypeReservationProfiles`

GetReservationProfiles returns the ReservationProfiles field if non-nil, zero value otherwise.

### GetReservationProfilesOk

`func (o *HotelReservationType) GetReservationProfilesOk() (*HotelReservationTypeReservationProfiles, bool)`

GetReservationProfilesOk returns a tuple with the ReservationProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfiles

`func (o *HotelReservationType) SetReservationProfiles(v HotelReservationTypeReservationProfiles)`

SetReservationProfiles sets ReservationProfiles field to given value.

### HasReservationProfiles

`func (o *HotelReservationType) HasReservationProfiles() bool`

HasReservationProfiles returns a boolean if a field has been set.

### GetReservationPaymentMethods

`func (o *HotelReservationType) GetReservationPaymentMethods() []ReservationPaymentMethodType`

GetReservationPaymentMethods returns the ReservationPaymentMethods field if non-nil, zero value otherwise.

### GetReservationPaymentMethodsOk

`func (o *HotelReservationType) GetReservationPaymentMethodsOk() (*[]ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethods

`func (o *HotelReservationType) SetReservationPaymentMethods(v []ReservationPaymentMethodType)`

SetReservationPaymentMethods sets ReservationPaymentMethods field to given value.

### HasReservationPaymentMethods

`func (o *HotelReservationType) HasReservationPaymentMethods() bool`

HasReservationPaymentMethods returns a boolean if a field has been set.

### GetCashiering

`func (o *HotelReservationType) GetCashiering() ResCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *HotelReservationType) GetCashieringOk() (*ResCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *HotelReservationType) SetCashiering(v ResCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *HotelReservationType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetExtSystemSync

`func (o *HotelReservationType) GetExtSystemSync() bool`

GetExtSystemSync returns the ExtSystemSync field if non-nil, zero value otherwise.

### GetExtSystemSyncOk

`func (o *HotelReservationType) GetExtSystemSyncOk() (*bool, bool)`

GetExtSystemSyncOk returns a tuple with the ExtSystemSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtSystemSync

`func (o *HotelReservationType) SetExtSystemSync(v bool)`

SetExtSystemSync sets ExtSystemSync field to given value.

### HasExtSystemSync

`func (o *HotelReservationType) HasExtSystemSync() bool`

HasExtSystemSync returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationStatus

`func (o *HotelReservationType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *HotelReservationType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *HotelReservationType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *HotelReservationType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetOverrideBlockRestriction

`func (o *HotelReservationType) GetOverrideBlockRestriction() bool`

GetOverrideBlockRestriction returns the OverrideBlockRestriction field if non-nil, zero value otherwise.

### GetOverrideBlockRestrictionOk

`func (o *HotelReservationType) GetOverrideBlockRestrictionOk() (*bool, bool)`

GetOverrideBlockRestrictionOk returns a tuple with the OverrideBlockRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideBlockRestriction

`func (o *HotelReservationType) SetOverrideBlockRestriction(v bool)`

SetOverrideBlockRestriction sets OverrideBlockRestriction field to given value.

### HasOverrideBlockRestriction

`func (o *HotelReservationType) HasOverrideBlockRestriction() bool`

HasOverrideBlockRestriction returns a boolean if a field has been set.

### GetAdditionalGuestInfo

`func (o *HotelReservationType) GetAdditionalGuestInfo() ResGuestAdditionalInfoType`

GetAdditionalGuestInfo returns the AdditionalGuestInfo field if non-nil, zero value otherwise.

### GetAdditionalGuestInfoOk

`func (o *HotelReservationType) GetAdditionalGuestInfoOk() (*ResGuestAdditionalInfoType, bool)`

GetAdditionalGuestInfoOk returns a tuple with the AdditionalGuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalGuestInfo

`func (o *HotelReservationType) SetAdditionalGuestInfo(v ResGuestAdditionalInfoType)`

SetAdditionalGuestInfo sets AdditionalGuestInfo field to given value.

### HasAdditionalGuestInfo

`func (o *HotelReservationType) HasAdditionalGuestInfo() bool`

HasAdditionalGuestInfo returns a boolean if a field has been set.

### GetOverrideExternalChecks

`func (o *HotelReservationType) GetOverrideExternalChecks() bool`

GetOverrideExternalChecks returns the OverrideExternalChecks field if non-nil, zero value otherwise.

### GetOverrideExternalChecksOk

`func (o *HotelReservationType) GetOverrideExternalChecksOk() (*bool, bool)`

GetOverrideExternalChecksOk returns a tuple with the OverrideExternalChecks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideExternalChecks

`func (o *HotelReservationType) SetOverrideExternalChecks(v bool)`

SetOverrideExternalChecks sets OverrideExternalChecks field to given value.

### HasOverrideExternalChecks

`func (o *HotelReservationType) HasOverrideExternalChecks() bool`

HasOverrideExternalChecks returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *HotelReservationType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *HotelReservationType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *HotelReservationType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *HotelReservationType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetFixedCharges

`func (o *HotelReservationType) GetFixedCharges() []FixedChargeType`

GetFixedCharges returns the FixedCharges field if non-nil, zero value otherwise.

### GetFixedChargesOk

`func (o *HotelReservationType) GetFixedChargesOk() (*[]FixedChargeType, bool)`

GetFixedChargesOk returns a tuple with the FixedCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharges

`func (o *HotelReservationType) SetFixedCharges(v []FixedChargeType)`

SetFixedCharges sets FixedCharges field to given value.

### HasFixedCharges

`func (o *HotelReservationType) HasFixedCharges() bool`

HasFixedCharges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


