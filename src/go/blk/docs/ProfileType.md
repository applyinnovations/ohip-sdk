# ProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | Pointer to [**ProfileTypeAddresses**](ProfileTypeAddresses.md) |  | [optional] 
**Cashiering** | Pointer to [**ProfileCashieringType**](ProfileCashieringType.md) |  | [optional] 
**Comments** | Pointer to [**ProfileTypeComments**](ProfileTypeComments.md) |  | [optional] 
**CommissionInfoList** | Pointer to [**[]ProfileCommissionType**](ProfileCommissionType.md) | Contains commission related details for the profile. | [optional] 
**Company** | Pointer to [**CompanyType**](CompanyType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**ECertificates** | Pointer to [**ECertificatesType**](ECertificatesType.md) |  | [optional] 
**Emails** | Pointer to [**ProfileTypeEmails**](ProfileTypeEmails.md) |  | [optional] 
**HasCommission** | Pointer to **bool** | Populates true if the profile has commission configured false otherwise. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastStayInfo** | Pointer to [**LastStayInfoType**](LastStayInfoType.md) |  | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this profile as recently accessed. | [optional] 
**OwnerCode** | Pointer to **string** | Owner Code associated to the profile. | [optional] 
**PreferenceCollection** | Pointer to [**ProfileTypePreferenceCollection**](ProfileTypePreferenceCollection.md) |  | [optional] 
**PrivacyInfo** | Pointer to [**PrivacyInfoType**](PrivacyInfoType.md) |  | [optional] 
**ProfileDeliveryMethods** | Pointer to [**ProfileTypeProfileDeliveryMethods**](ProfileTypeProfileDeliveryMethods.md) |  | [optional] 
**ProfileImage** | Pointer to [**ImageSetType**](ImageSetType.md) |  | [optional] 
**ProfileMemberships** | Pointer to [**ProfileTypeProfileMemberships**](ProfileTypeProfileMemberships.md) |  | [optional] 
**ProfileRestrictions** | Pointer to [**ProfileRestrictions**](ProfileRestrictions.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**ProtectedBy** | Pointer to **string** | What level this profile is protected. | [optional] 
**Relationships** | Pointer to [**ProfileTypeRelationships**](ProfileTypeRelationships.md) |  | [optional] 
**RelationshipsSummary** | Pointer to [**ProfileTypeRelationshipsSummary**](ProfileTypeRelationshipsSummary.md) |  | [optional] 
**ReservationInfoList** | Pointer to [**ReservationHistoryFutureInfoType**](ReservationHistoryFutureInfoType.md) |  | [optional] 
**RoomOwnershipsList** | Pointer to [**ProfileTypeRoomOwnershipsList**](ProfileTypeRoomOwnershipsList.md) |  | [optional] 
**ShowInactiveRoomOwners** | Pointer to **bool** | Flag to show inactive Room Owners. | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**StayReservationInfoList** | Pointer to [**ReservationStayHistoryFutureInfoType**](ReservationStayHistoryFutureInfoType.md) |  | [optional] 
**TaxInfo** | Pointer to [**ProfileTaxInfoType**](ProfileTaxInfoType.md) |  | [optional] 
**Telephones** | Pointer to [**ProfileTypeTelephones**](ProfileTypeTelephones.md) |  | [optional] 
**TraceCode** | Pointer to **string** | Trace Code associated to the profile. | [optional] 
**URLs** | Pointer to [**ProfileTypeURLs**](ProfileTypeURLs.md) |  | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 

## Methods

### NewProfileType

`func NewProfileType() *ProfileType`

NewProfileType instantiates a new ProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeWithDefaults

`func NewProfileTypeWithDefaults() *ProfileType`

NewProfileTypeWithDefaults instantiates a new ProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresses

`func (o *ProfileType) GetAddresses() ProfileTypeAddresses`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *ProfileType) GetAddressesOk() (*ProfileTypeAddresses, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *ProfileType) SetAddresses(v ProfileTypeAddresses)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *ProfileType) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetCashiering

`func (o *ProfileType) GetCashiering() ProfileCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *ProfileType) GetCashieringOk() (*ProfileCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *ProfileType) SetCashiering(v ProfileCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *ProfileType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetComments

`func (o *ProfileType) GetComments() ProfileTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ProfileType) GetCommentsOk() (*ProfileTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ProfileType) SetComments(v ProfileTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ProfileType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCommissionInfoList

`func (o *ProfileType) GetCommissionInfoList() []ProfileCommissionType`

GetCommissionInfoList returns the CommissionInfoList field if non-nil, zero value otherwise.

### GetCommissionInfoListOk

`func (o *ProfileType) GetCommissionInfoListOk() (*[]ProfileCommissionType, bool)`

GetCommissionInfoListOk returns a tuple with the CommissionInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionInfoList

`func (o *ProfileType) SetCommissionInfoList(v []ProfileCommissionType)`

SetCommissionInfoList sets CommissionInfoList field to given value.

### HasCommissionInfoList

`func (o *ProfileType) HasCommissionInfoList() bool`

HasCommissionInfoList returns a boolean if a field has been set.

### GetCompany

`func (o *ProfileType) GetCompany() CompanyType`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *ProfileType) GetCompanyOk() (*CompanyType, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *ProfileType) SetCompany(v CompanyType)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *ProfileType) HasCompany() bool`

HasCompany returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ProfileType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ProfileType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ProfileType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ProfileType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ProfileType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ProfileType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ProfileType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ProfileType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetCustomer

`func (o *ProfileType) GetCustomer() CustomerType`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ProfileType) GetCustomerOk() (*CustomerType, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ProfileType) SetCustomer(v CustomerType)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *ProfileType) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetECertificates

`func (o *ProfileType) GetECertificates() ECertificatesType`

GetECertificates returns the ECertificates field if non-nil, zero value otherwise.

### GetECertificatesOk

`func (o *ProfileType) GetECertificatesOk() (*ECertificatesType, bool)`

GetECertificatesOk returns a tuple with the ECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificates

`func (o *ProfileType) SetECertificates(v ECertificatesType)`

SetECertificates sets ECertificates field to given value.

### HasECertificates

`func (o *ProfileType) HasECertificates() bool`

HasECertificates returns a boolean if a field has been set.

### GetEmails

`func (o *ProfileType) GetEmails() ProfileTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *ProfileType) GetEmailsOk() (*ProfileTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *ProfileType) SetEmails(v ProfileTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *ProfileType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.

### GetHasCommission

`func (o *ProfileType) GetHasCommission() bool`

GetHasCommission returns the HasCommission field if non-nil, zero value otherwise.

### GetHasCommissionOk

`func (o *ProfileType) GetHasCommissionOk() (*bool, bool)`

GetHasCommissionOk returns a tuple with the HasCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasCommission

`func (o *ProfileType) SetHasCommission(v bool)`

SetHasCommission sets HasCommission field to given value.

### HasHasCommission

`func (o *ProfileType) HasHasCommission() bool`

HasHasCommission returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ProfileType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ProfileType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ProfileType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ProfileType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ProfileType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ProfileType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ProfileType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ProfileType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastStayInfo

`func (o *ProfileType) GetLastStayInfo() LastStayInfoType`

GetLastStayInfo returns the LastStayInfo field if non-nil, zero value otherwise.

### GetLastStayInfoOk

`func (o *ProfileType) GetLastStayInfoOk() (*LastStayInfoType, bool)`

GetLastStayInfoOk returns a tuple with the LastStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayInfo

`func (o *ProfileType) SetLastStayInfo(v LastStayInfoType)`

SetLastStayInfo sets LastStayInfo field to given value.

### HasLastStayInfo

`func (o *ProfileType) HasLastStayInfo() bool`

HasLastStayInfo returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *ProfileType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *ProfileType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *ProfileType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *ProfileType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetOwnerCode

`func (o *ProfileType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *ProfileType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *ProfileType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *ProfileType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *ProfileType) GetPreferenceCollection() ProfileTypePreferenceCollection`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *ProfileType) GetPreferenceCollectionOk() (*ProfileTypePreferenceCollection, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *ProfileType) SetPreferenceCollection(v ProfileTypePreferenceCollection)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *ProfileType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetPrivacyInfo

`func (o *ProfileType) GetPrivacyInfo() PrivacyInfoType`

GetPrivacyInfo returns the PrivacyInfo field if non-nil, zero value otherwise.

### GetPrivacyInfoOk

`func (o *ProfileType) GetPrivacyInfoOk() (*PrivacyInfoType, bool)`

GetPrivacyInfoOk returns a tuple with the PrivacyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivacyInfo

`func (o *ProfileType) SetPrivacyInfo(v PrivacyInfoType)`

SetPrivacyInfo sets PrivacyInfo field to given value.

### HasPrivacyInfo

`func (o *ProfileType) HasPrivacyInfo() bool`

HasPrivacyInfo returns a boolean if a field has been set.

### GetProfileDeliveryMethods

`func (o *ProfileType) GetProfileDeliveryMethods() ProfileTypeProfileDeliveryMethods`

GetProfileDeliveryMethods returns the ProfileDeliveryMethods field if non-nil, zero value otherwise.

### GetProfileDeliveryMethodsOk

`func (o *ProfileType) GetProfileDeliveryMethodsOk() (*ProfileTypeProfileDeliveryMethods, bool)`

GetProfileDeliveryMethodsOk returns a tuple with the ProfileDeliveryMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDeliveryMethods

`func (o *ProfileType) SetProfileDeliveryMethods(v ProfileTypeProfileDeliveryMethods)`

SetProfileDeliveryMethods sets ProfileDeliveryMethods field to given value.

### HasProfileDeliveryMethods

`func (o *ProfileType) HasProfileDeliveryMethods() bool`

HasProfileDeliveryMethods returns a boolean if a field has been set.

### GetProfileImage

`func (o *ProfileType) GetProfileImage() ImageSetType`

GetProfileImage returns the ProfileImage field if non-nil, zero value otherwise.

### GetProfileImageOk

`func (o *ProfileType) GetProfileImageOk() (*ImageSetType, bool)`

GetProfileImageOk returns a tuple with the ProfileImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileImage

`func (o *ProfileType) SetProfileImage(v ImageSetType)`

SetProfileImage sets ProfileImage field to given value.

### HasProfileImage

`func (o *ProfileType) HasProfileImage() bool`

HasProfileImage returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *ProfileType) GetProfileMemberships() ProfileTypeProfileMemberships`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *ProfileType) GetProfileMembershipsOk() (*ProfileTypeProfileMemberships, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *ProfileType) SetProfileMemberships(v ProfileTypeProfileMemberships)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *ProfileType) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetProfileRestrictions

`func (o *ProfileType) GetProfileRestrictions() ProfileRestrictions`

GetProfileRestrictions returns the ProfileRestrictions field if non-nil, zero value otherwise.

### GetProfileRestrictionsOk

`func (o *ProfileType) GetProfileRestrictionsOk() (*ProfileRestrictions, bool)`

GetProfileRestrictionsOk returns a tuple with the ProfileRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictions

`func (o *ProfileType) SetProfileRestrictions(v ProfileRestrictions)`

SetProfileRestrictions sets ProfileRestrictions field to given value.

### HasProfileRestrictions

`func (o *ProfileType) HasProfileRestrictions() bool`

HasProfileRestrictions returns a boolean if a field has been set.

### GetProfileType

`func (o *ProfileType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ProfileType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ProfileType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetProtectedBy

`func (o *ProfileType) GetProtectedBy() string`

GetProtectedBy returns the ProtectedBy field if non-nil, zero value otherwise.

### GetProtectedByOk

`func (o *ProfileType) GetProtectedByOk() (*string, bool)`

GetProtectedByOk returns a tuple with the ProtectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedBy

`func (o *ProfileType) SetProtectedBy(v string)`

SetProtectedBy sets ProtectedBy field to given value.

### HasProtectedBy

`func (o *ProfileType) HasProtectedBy() bool`

HasProtectedBy returns a boolean if a field has been set.

### GetRelationships

`func (o *ProfileType) GetRelationships() ProfileTypeRelationships`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *ProfileType) GetRelationshipsOk() (*ProfileTypeRelationships, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *ProfileType) SetRelationships(v ProfileTypeRelationships)`

SetRelationships sets Relationships field to given value.

### HasRelationships

`func (o *ProfileType) HasRelationships() bool`

HasRelationships returns a boolean if a field has been set.

### GetRelationshipsSummary

`func (o *ProfileType) GetRelationshipsSummary() ProfileTypeRelationshipsSummary`

GetRelationshipsSummary returns the RelationshipsSummary field if non-nil, zero value otherwise.

### GetRelationshipsSummaryOk

`func (o *ProfileType) GetRelationshipsSummaryOk() (*ProfileTypeRelationshipsSummary, bool)`

GetRelationshipsSummaryOk returns a tuple with the RelationshipsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipsSummary

`func (o *ProfileType) SetRelationshipsSummary(v ProfileTypeRelationshipsSummary)`

SetRelationshipsSummary sets RelationshipsSummary field to given value.

### HasRelationshipsSummary

`func (o *ProfileType) HasRelationshipsSummary() bool`

HasRelationshipsSummary returns a boolean if a field has been set.

### GetReservationInfoList

`func (o *ProfileType) GetReservationInfoList() ReservationHistoryFutureInfoType`

GetReservationInfoList returns the ReservationInfoList field if non-nil, zero value otherwise.

### GetReservationInfoListOk

`func (o *ProfileType) GetReservationInfoListOk() (*ReservationHistoryFutureInfoType, bool)`

GetReservationInfoListOk returns a tuple with the ReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfoList

`func (o *ProfileType) SetReservationInfoList(v ReservationHistoryFutureInfoType)`

SetReservationInfoList sets ReservationInfoList field to given value.

### HasReservationInfoList

`func (o *ProfileType) HasReservationInfoList() bool`

HasReservationInfoList returns a boolean if a field has been set.

### GetRoomOwnershipsList

`func (o *ProfileType) GetRoomOwnershipsList() ProfileTypeRoomOwnershipsList`

GetRoomOwnershipsList returns the RoomOwnershipsList field if non-nil, zero value otherwise.

### GetRoomOwnershipsListOk

`func (o *ProfileType) GetRoomOwnershipsListOk() (*ProfileTypeRoomOwnershipsList, bool)`

GetRoomOwnershipsListOk returns a tuple with the RoomOwnershipsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipsList

`func (o *ProfileType) SetRoomOwnershipsList(v ProfileTypeRoomOwnershipsList)`

SetRoomOwnershipsList sets RoomOwnershipsList field to given value.

### HasRoomOwnershipsList

`func (o *ProfileType) HasRoomOwnershipsList() bool`

HasRoomOwnershipsList returns a boolean if a field has been set.

### GetShowInactiveRoomOwners

`func (o *ProfileType) GetShowInactiveRoomOwners() bool`

GetShowInactiveRoomOwners returns the ShowInactiveRoomOwners field if non-nil, zero value otherwise.

### GetShowInactiveRoomOwnersOk

`func (o *ProfileType) GetShowInactiveRoomOwnersOk() (*bool, bool)`

GetShowInactiveRoomOwnersOk returns a tuple with the ShowInactiveRoomOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowInactiveRoomOwners

`func (o *ProfileType) SetShowInactiveRoomOwners(v bool)`

SetShowInactiveRoomOwners sets ShowInactiveRoomOwners field to given value.

### HasShowInactiveRoomOwners

`func (o *ProfileType) HasShowInactiveRoomOwners() bool`

HasShowInactiveRoomOwners returns a boolean if a field has been set.

### GetStatusCode

`func (o *ProfileType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *ProfileType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *ProfileType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *ProfileType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetStayReservationInfoList

`func (o *ProfileType) GetStayReservationInfoList() ReservationStayHistoryFutureInfoType`

GetStayReservationInfoList returns the StayReservationInfoList field if non-nil, zero value otherwise.

### GetStayReservationInfoListOk

`func (o *ProfileType) GetStayReservationInfoListOk() (*ReservationStayHistoryFutureInfoType, bool)`

GetStayReservationInfoListOk returns a tuple with the StayReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayReservationInfoList

`func (o *ProfileType) SetStayReservationInfoList(v ReservationStayHistoryFutureInfoType)`

SetStayReservationInfoList sets StayReservationInfoList field to given value.

### HasStayReservationInfoList

`func (o *ProfileType) HasStayReservationInfoList() bool`

HasStayReservationInfoList returns a boolean if a field has been set.

### GetTaxInfo

`func (o *ProfileType) GetTaxInfo() ProfileTaxInfoType`

GetTaxInfo returns the TaxInfo field if non-nil, zero value otherwise.

### GetTaxInfoOk

`func (o *ProfileType) GetTaxInfoOk() (*ProfileTaxInfoType, bool)`

GetTaxInfoOk returns a tuple with the TaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInfo

`func (o *ProfileType) SetTaxInfo(v ProfileTaxInfoType)`

SetTaxInfo sets TaxInfo field to given value.

### HasTaxInfo

`func (o *ProfileType) HasTaxInfo() bool`

HasTaxInfo returns a boolean if a field has been set.

### GetTelephones

`func (o *ProfileType) GetTelephones() ProfileTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *ProfileType) GetTelephonesOk() (*ProfileTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *ProfileType) SetTelephones(v ProfileTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *ProfileType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetTraceCode

`func (o *ProfileType) GetTraceCode() string`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *ProfileType) GetTraceCodeOk() (*string, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *ProfileType) SetTraceCode(v string)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *ProfileType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetURLs

`func (o *ProfileType) GetURLs() ProfileTypeURLs`

GetURLs returns the URLs field if non-nil, zero value otherwise.

### GetURLsOk

`func (o *ProfileType) GetURLsOk() (*ProfileTypeURLs, bool)`

GetURLsOk returns a tuple with the URLs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLs

`func (o *ProfileType) SetURLs(v ProfileTypeURLs)`

SetURLs sets URLs field to given value.

### HasURLs

`func (o *ProfileType) HasURLs() bool`

HasURLs returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *ProfileType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *ProfileType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *ProfileType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *ProfileType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


