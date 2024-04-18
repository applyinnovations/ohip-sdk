# ProfileEnrollmentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | Pointer to [**CompanyProfileTypeAddresses**](CompanyProfileTypeAddresses.md) |  | [optional] 
**BusinessSegments** | Pointer to **[]string** | Business/Market Segment associated to the profile. | [optional] 
**Cashiering** | Pointer to [**ProfileCashieringType**](ProfileCashieringType.md) |  | [optional] 
**Comments** | Pointer to [**CompanyProfileTypeComments**](CompanyProfileTypeComments.md) |  | [optional] 
**CommissionInfoList** | Pointer to [**[]ProfileCommissionType**](ProfileCommissionType.md) | Contains commission related details for the profile. | [optional] 
**Company** | Pointer to [**CompanyType**](CompanyType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**ECertificates** | Pointer to [**[]ECertificateType**](ECertificateType.md) | List of e-certificates for the profile. | [optional] 
**EarningPreferences** | Pointer to [**EarningPreferencesType**](EarningPreferencesType.md) |  | [optional] 
**EligibleForFiscalFolio** | Pointer to **string** | Eligible for Fiscal Folio/Payload generation. | [optional] 
**Emails** | Pointer to [**ProfileEnrollmentTypeEmails**](ProfileEnrollmentTypeEmails.md) |  | [optional] 
**EmployeeId** | Pointer to **string** | EmployeeID of the user who is enrolling the Guest. | [optional] 
**Employer** | Pointer to **string** |  | [optional] 
**EnrollmentCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**EnrollmentPaymentDetails** | Pointer to [**EnrollmentPaymentDetailsType**](EnrollmentPaymentDetailsType.md) |  | [optional] 
**EnrollmentType** | Pointer to [**EnrollmentTypeType**](EnrollmentTypeType.md) |  | [optional] 
**ExternalDatabaseID** | Pointer to **string** | Enrollment details will be fetched from this External database. | [optional] 
**FiscalGuestType** | Pointer to **string** | Fiscal Guest Type is used for Fiscal Folio funcionality | [optional] 
**GdsNegotiatedRates** | Pointer to [**CompanyProfileTypeGdsNegotiatedRates**](CompanyProfileTypeGdsNegotiatedRates.md) |  | [optional] 
**HasCommission** | Pointer to **bool** | Populates true if the profile has commission configured false otherwise. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code, It is used to filter hotel specific children to this specific hotel code. | [optional] 
**InfluenceCode** | Pointer to **string** | Influence Code associated to the profile. | [optional] 
**InheritedNegRates** | Pointer to **bool** | Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. | [optional] 
**Keywords** | Pointer to [**CompanyProfileTypeKeywords**](CompanyProfileTypeKeywords.md) |  | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastStayInfo** | Pointer to [**LastStayInfoType**](LastStayInfoType.md) |  | [optional] 
**LocalizationGuestType** | Pointer to **string** | Localization Guest Type assocaited to the profile. | [optional] 
**MailingActions** | Pointer to [**MailingActionsType**](MailingActionsType.md) |  | [optional] 
**MailingPreferences** | Pointer to [**MailingPreferencesType**](MailingPreferencesType.md) |  | [optional] 
**MarkAsRecentlyAccessed** | Pointer to **bool** | Mark this profile as recently accessed. | [optional] 
**MarkForHistory** | Pointer to **bool** | \&quot;true\&quot; setting marks the profile to be kept from being purged, once the profile is marked inactive. | [optional] 
**MembershipCardRegistrationCode** | Pointer to **string** | Profile&#39;s membership card registration code. | [optional] 
**NegotiatedRates** | Pointer to [**CompanyProfileTypeNegotiatedRates**](CompanyProfileTypeNegotiatedRates.md) |  | [optional] 
**OwnerCode** | Pointer to **string** | Owner Code associated to the profile. | [optional] 
**PreferenceCollection** | Pointer to [**ProfileEnrollmentTypePreferenceCollection**](ProfileEnrollmentTypePreferenceCollection.md) |  | [optional] 
**PreviousHotelStays** | Pointer to [**[]HotelStayType**](HotelStayType.md) | Detailed information of the hotel stay. | [optional] 
**PrivacyInfo** | Pointer to [**PrivacyInfoType**](PrivacyInfoType.md) |  | [optional] 
**ProfileAccessType** | Pointer to [**ProfileAccessType**](ProfileAccessType.md) |  | [optional] 
**ProfileDeliveryMethods** | Pointer to [**ProfileEnrollmentTypeProfileDeliveryMethods**](ProfileEnrollmentTypeProfileDeliveryMethods.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileImage** | Pointer to [**ImageSetType**](ImageSetType.md) |  | [optional] 
**ProfileIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**ProfileMemberships** | Pointer to [**ProfileEnrollmentTypeProfileMemberships**](ProfileEnrollmentTypeProfileMemberships.md) |  | [optional] 
**ProfileRestrictions** | Pointer to [**ProfileRestrictions**](ProfileRestrictions.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**ProtectedBy** | Pointer to **string** | What level this profile is protected. | [optional] 
**RegisteredProperty** | Pointer to **string** | Hotel which this profile is registered with. This attribute is not used for configuration. | [optional] 
**Relationships** | Pointer to [**CompanyProfileTypeRelationships**](CompanyProfileTypeRelationships.md) |  | [optional] 
**RelationshipsSummary** | Pointer to [**ProfileEnrollmentTypeRelationshipsSummary**](ProfileEnrollmentTypeRelationshipsSummary.md) |  | [optional] 
**RequestForHotel** | Pointer to **string** | Hotel which this profile is to be registered. This attribute is only used during creation of profile. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationInfoList** | Pointer to [**ReservationHistoryFutureInfoType**](ReservationHistoryFutureInfoType.md) |  | [optional] 
**RewardsInfo** | Pointer to [**RewardsInfoType**](RewardsInfoType.md) |  | [optional] 
**RoomOwnershipsList** | Pointer to [**ProfileEnrollmentTypeRoomOwnershipsList**](ProfileEnrollmentTypeRoomOwnershipsList.md) |  | [optional] 
**RoomPreferences** | Pointer to [**RoomPreferencesType**](RoomPreferencesType.md) |  | [optional] 
**SalesInfo** | Pointer to [**SalesInfoType**](SalesInfoType.md) |  | [optional] 
**ShowInactiveRoomOwners** | Pointer to **bool** | Flag to show inactive Room Owners. | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**StayReservationInfoList** | Pointer to [**ReservationStayHistoryFutureInfoType**](ReservationStayHistoryFutureInfoType.md) |  | [optional] 
**Subscriptions** | Pointer to [**[]ProfileSubscriptionType**](ProfileSubscriptionType.md) | Details of the OPERA Profile subscription to external system | [optional] 
**TaxInfo** | Pointer to [**ProfileTaxInfoType**](ProfileTaxInfoType.md) |  | [optional] 
**Telephones** | Pointer to [**ProfileEnrollmentTypeTelephones**](ProfileEnrollmentTypeTelephones.md) |  | [optional] 
**Territory** | Pointer to **string** | Territory associated to the profile. | [optional] 
**TraceCode** | Pointer to **string** | Trace Code associated to the profile. | [optional] 
**URLs** | Pointer to [**CompanyProfileTypeURLs**](CompanyProfileTypeURLs.md) |  | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**UserId** | Pointer to **string** | UserID/LoginID of the user who is enrolling the Guest. | [optional] 
**WebUserAccounts** | Pointer to [**[]WebUserAccountType**](WebUserAccountType.md) | Web User Accounts List. | [optional] 

## Methods

### NewProfileEnrollmentType

`func NewProfileEnrollmentType() *ProfileEnrollmentType`

NewProfileEnrollmentType instantiates a new ProfileEnrollmentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeWithDefaults

`func NewProfileEnrollmentTypeWithDefaults() *ProfileEnrollmentType`

NewProfileEnrollmentTypeWithDefaults instantiates a new ProfileEnrollmentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresses

`func (o *ProfileEnrollmentType) GetAddresses() CompanyProfileTypeAddresses`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *ProfileEnrollmentType) GetAddressesOk() (*CompanyProfileTypeAddresses, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *ProfileEnrollmentType) SetAddresses(v CompanyProfileTypeAddresses)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *ProfileEnrollmentType) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetBusinessSegments

`func (o *ProfileEnrollmentType) GetBusinessSegments() []string`

GetBusinessSegments returns the BusinessSegments field if non-nil, zero value otherwise.

### GetBusinessSegmentsOk

`func (o *ProfileEnrollmentType) GetBusinessSegmentsOk() (*[]string, bool)`

GetBusinessSegmentsOk returns a tuple with the BusinessSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessSegments

`func (o *ProfileEnrollmentType) SetBusinessSegments(v []string)`

SetBusinessSegments sets BusinessSegments field to given value.

### HasBusinessSegments

`func (o *ProfileEnrollmentType) HasBusinessSegments() bool`

HasBusinessSegments returns a boolean if a field has been set.

### GetCashiering

`func (o *ProfileEnrollmentType) GetCashiering() ProfileCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *ProfileEnrollmentType) GetCashieringOk() (*ProfileCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *ProfileEnrollmentType) SetCashiering(v ProfileCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *ProfileEnrollmentType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetComments

`func (o *ProfileEnrollmentType) GetComments() CompanyProfileTypeComments`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ProfileEnrollmentType) GetCommentsOk() (*CompanyProfileTypeComments, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ProfileEnrollmentType) SetComments(v CompanyProfileTypeComments)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ProfileEnrollmentType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCommissionInfoList

`func (o *ProfileEnrollmentType) GetCommissionInfoList() []ProfileCommissionType`

GetCommissionInfoList returns the CommissionInfoList field if non-nil, zero value otherwise.

### GetCommissionInfoListOk

`func (o *ProfileEnrollmentType) GetCommissionInfoListOk() (*[]ProfileCommissionType, bool)`

GetCommissionInfoListOk returns a tuple with the CommissionInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionInfoList

`func (o *ProfileEnrollmentType) SetCommissionInfoList(v []ProfileCommissionType)`

SetCommissionInfoList sets CommissionInfoList field to given value.

### HasCommissionInfoList

`func (o *ProfileEnrollmentType) HasCommissionInfoList() bool`

HasCommissionInfoList returns a boolean if a field has been set.

### GetCompany

`func (o *ProfileEnrollmentType) GetCompany() CompanyType`

GetCompany returns the Company field if non-nil, zero value otherwise.

### GetCompanyOk

`func (o *ProfileEnrollmentType) GetCompanyOk() (*CompanyType, bool)`

GetCompanyOk returns a tuple with the Company field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompany

`func (o *ProfileEnrollmentType) SetCompany(v CompanyType)`

SetCompany sets Company field to given value.

### HasCompany

`func (o *ProfileEnrollmentType) HasCompany() bool`

HasCompany returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ProfileEnrollmentType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ProfileEnrollmentType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ProfileEnrollmentType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ProfileEnrollmentType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ProfileEnrollmentType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ProfileEnrollmentType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ProfileEnrollmentType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ProfileEnrollmentType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetCustomer

`func (o *ProfileEnrollmentType) GetCustomer() CustomerType`

GetCustomer returns the Customer field if non-nil, zero value otherwise.

### GetCustomerOk

`func (o *ProfileEnrollmentType) GetCustomerOk() (*CustomerType, bool)`

GetCustomerOk returns a tuple with the Customer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomer

`func (o *ProfileEnrollmentType) SetCustomer(v CustomerType)`

SetCustomer sets Customer field to given value.

### HasCustomer

`func (o *ProfileEnrollmentType) HasCustomer() bool`

HasCustomer returns a boolean if a field has been set.

### GetECertificates

`func (o *ProfileEnrollmentType) GetECertificates() []ECertificateType`

GetECertificates returns the ECertificates field if non-nil, zero value otherwise.

### GetECertificatesOk

`func (o *ProfileEnrollmentType) GetECertificatesOk() (*[]ECertificateType, bool)`

GetECertificatesOk returns a tuple with the ECertificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificates

`func (o *ProfileEnrollmentType) SetECertificates(v []ECertificateType)`

SetECertificates sets ECertificates field to given value.

### HasECertificates

`func (o *ProfileEnrollmentType) HasECertificates() bool`

HasECertificates returns a boolean if a field has been set.

### GetEarningPreferences

`func (o *ProfileEnrollmentType) GetEarningPreferences() EarningPreferencesType`

GetEarningPreferences returns the EarningPreferences field if non-nil, zero value otherwise.

### GetEarningPreferencesOk

`func (o *ProfileEnrollmentType) GetEarningPreferencesOk() (*EarningPreferencesType, bool)`

GetEarningPreferencesOk returns a tuple with the EarningPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarningPreferences

`func (o *ProfileEnrollmentType) SetEarningPreferences(v EarningPreferencesType)`

SetEarningPreferences sets EarningPreferences field to given value.

### HasEarningPreferences

`func (o *ProfileEnrollmentType) HasEarningPreferences() bool`

HasEarningPreferences returns a boolean if a field has been set.

### GetEligibleForFiscalFolio

`func (o *ProfileEnrollmentType) GetEligibleForFiscalFolio() string`

GetEligibleForFiscalFolio returns the EligibleForFiscalFolio field if non-nil, zero value otherwise.

### GetEligibleForFiscalFolioOk

`func (o *ProfileEnrollmentType) GetEligibleForFiscalFolioOk() (*string, bool)`

GetEligibleForFiscalFolioOk returns a tuple with the EligibleForFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEligibleForFiscalFolio

`func (o *ProfileEnrollmentType) SetEligibleForFiscalFolio(v string)`

SetEligibleForFiscalFolio sets EligibleForFiscalFolio field to given value.

### HasEligibleForFiscalFolio

`func (o *ProfileEnrollmentType) HasEligibleForFiscalFolio() bool`

HasEligibleForFiscalFolio returns a boolean if a field has been set.

### GetEmails

`func (o *ProfileEnrollmentType) GetEmails() ProfileEnrollmentTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *ProfileEnrollmentType) GetEmailsOk() (*ProfileEnrollmentTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *ProfileEnrollmentType) SetEmails(v ProfileEnrollmentTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *ProfileEnrollmentType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.

### GetEmployeeId

`func (o *ProfileEnrollmentType) GetEmployeeId() string`

GetEmployeeId returns the EmployeeId field if non-nil, zero value otherwise.

### GetEmployeeIdOk

`func (o *ProfileEnrollmentType) GetEmployeeIdOk() (*string, bool)`

GetEmployeeIdOk returns a tuple with the EmployeeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmployeeId

`func (o *ProfileEnrollmentType) SetEmployeeId(v string)`

SetEmployeeId sets EmployeeId field to given value.

### HasEmployeeId

`func (o *ProfileEnrollmentType) HasEmployeeId() bool`

HasEmployeeId returns a boolean if a field has been set.

### GetEmployer

`func (o *ProfileEnrollmentType) GetEmployer() string`

GetEmployer returns the Employer field if non-nil, zero value otherwise.

### GetEmployerOk

`func (o *ProfileEnrollmentType) GetEmployerOk() (*string, bool)`

GetEmployerOk returns a tuple with the Employer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmployer

`func (o *ProfileEnrollmentType) SetEmployer(v string)`

SetEmployer sets Employer field to given value.

### HasEmployer

`func (o *ProfileEnrollmentType) HasEmployer() bool`

HasEmployer returns a boolean if a field has been set.

### GetEnrollmentCode

`func (o *ProfileEnrollmentType) GetEnrollmentCode() CodeDescriptionType`

GetEnrollmentCode returns the EnrollmentCode field if non-nil, zero value otherwise.

### GetEnrollmentCodeOk

`func (o *ProfileEnrollmentType) GetEnrollmentCodeOk() (*CodeDescriptionType, bool)`

GetEnrollmentCodeOk returns a tuple with the EnrollmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentCode

`func (o *ProfileEnrollmentType) SetEnrollmentCode(v CodeDescriptionType)`

SetEnrollmentCode sets EnrollmentCode field to given value.

### HasEnrollmentCode

`func (o *ProfileEnrollmentType) HasEnrollmentCode() bool`

HasEnrollmentCode returns a boolean if a field has been set.

### GetEnrollmentPaymentDetails

`func (o *ProfileEnrollmentType) GetEnrollmentPaymentDetails() EnrollmentPaymentDetailsType`

GetEnrollmentPaymentDetails returns the EnrollmentPaymentDetails field if non-nil, zero value otherwise.

### GetEnrollmentPaymentDetailsOk

`func (o *ProfileEnrollmentType) GetEnrollmentPaymentDetailsOk() (*EnrollmentPaymentDetailsType, bool)`

GetEnrollmentPaymentDetailsOk returns a tuple with the EnrollmentPaymentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentPaymentDetails

`func (o *ProfileEnrollmentType) SetEnrollmentPaymentDetails(v EnrollmentPaymentDetailsType)`

SetEnrollmentPaymentDetails sets EnrollmentPaymentDetails field to given value.

### HasEnrollmentPaymentDetails

`func (o *ProfileEnrollmentType) HasEnrollmentPaymentDetails() bool`

HasEnrollmentPaymentDetails returns a boolean if a field has been set.

### GetEnrollmentType

`func (o *ProfileEnrollmentType) GetEnrollmentType() EnrollmentTypeType`

GetEnrollmentType returns the EnrollmentType field if non-nil, zero value otherwise.

### GetEnrollmentTypeOk

`func (o *ProfileEnrollmentType) GetEnrollmentTypeOk() (*EnrollmentTypeType, bool)`

GetEnrollmentTypeOk returns a tuple with the EnrollmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentType

`func (o *ProfileEnrollmentType) SetEnrollmentType(v EnrollmentTypeType)`

SetEnrollmentType sets EnrollmentType field to given value.

### HasEnrollmentType

`func (o *ProfileEnrollmentType) HasEnrollmentType() bool`

HasEnrollmentType returns a boolean if a field has been set.

### GetExternalDatabaseID

`func (o *ProfileEnrollmentType) GetExternalDatabaseID() string`

GetExternalDatabaseID returns the ExternalDatabaseID field if non-nil, zero value otherwise.

### GetExternalDatabaseIDOk

`func (o *ProfileEnrollmentType) GetExternalDatabaseIDOk() (*string, bool)`

GetExternalDatabaseIDOk returns a tuple with the ExternalDatabaseID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalDatabaseID

`func (o *ProfileEnrollmentType) SetExternalDatabaseID(v string)`

SetExternalDatabaseID sets ExternalDatabaseID field to given value.

### HasExternalDatabaseID

`func (o *ProfileEnrollmentType) HasExternalDatabaseID() bool`

HasExternalDatabaseID returns a boolean if a field has been set.

### GetFiscalGuestType

`func (o *ProfileEnrollmentType) GetFiscalGuestType() string`

GetFiscalGuestType returns the FiscalGuestType field if non-nil, zero value otherwise.

### GetFiscalGuestTypeOk

`func (o *ProfileEnrollmentType) GetFiscalGuestTypeOk() (*string, bool)`

GetFiscalGuestTypeOk returns a tuple with the FiscalGuestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalGuestType

`func (o *ProfileEnrollmentType) SetFiscalGuestType(v string)`

SetFiscalGuestType sets FiscalGuestType field to given value.

### HasFiscalGuestType

`func (o *ProfileEnrollmentType) HasFiscalGuestType() bool`

HasFiscalGuestType returns a boolean if a field has been set.

### GetGdsNegotiatedRates

`func (o *ProfileEnrollmentType) GetGdsNegotiatedRates() CompanyProfileTypeGdsNegotiatedRates`

GetGdsNegotiatedRates returns the GdsNegotiatedRates field if non-nil, zero value otherwise.

### GetGdsNegotiatedRatesOk

`func (o *ProfileEnrollmentType) GetGdsNegotiatedRatesOk() (*CompanyProfileTypeGdsNegotiatedRates, bool)`

GetGdsNegotiatedRatesOk returns a tuple with the GdsNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGdsNegotiatedRates

`func (o *ProfileEnrollmentType) SetGdsNegotiatedRates(v CompanyProfileTypeGdsNegotiatedRates)`

SetGdsNegotiatedRates sets GdsNegotiatedRates field to given value.

### HasGdsNegotiatedRates

`func (o *ProfileEnrollmentType) HasGdsNegotiatedRates() bool`

HasGdsNegotiatedRates returns a boolean if a field has been set.

### GetHasCommission

`func (o *ProfileEnrollmentType) GetHasCommission() bool`

GetHasCommission returns the HasCommission field if non-nil, zero value otherwise.

### GetHasCommissionOk

`func (o *ProfileEnrollmentType) GetHasCommissionOk() (*bool, bool)`

GetHasCommissionOk returns a tuple with the HasCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasCommission

`func (o *ProfileEnrollmentType) SetHasCommission(v bool)`

SetHasCommission sets HasCommission field to given value.

### HasHasCommission

`func (o *ProfileEnrollmentType) HasHasCommission() bool`

HasHasCommission returns a boolean if a field has been set.

### GetHotelId

`func (o *ProfileEnrollmentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProfileEnrollmentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProfileEnrollmentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProfileEnrollmentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInfluenceCode

`func (o *ProfileEnrollmentType) GetInfluenceCode() string`

GetInfluenceCode returns the InfluenceCode field if non-nil, zero value otherwise.

### GetInfluenceCodeOk

`func (o *ProfileEnrollmentType) GetInfluenceCodeOk() (*string, bool)`

GetInfluenceCodeOk returns a tuple with the InfluenceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfluenceCode

`func (o *ProfileEnrollmentType) SetInfluenceCode(v string)`

SetInfluenceCode sets InfluenceCode field to given value.

### HasInfluenceCode

`func (o *ProfileEnrollmentType) HasInfluenceCode() bool`

HasInfluenceCode returns a boolean if a field has been set.

### GetInheritedNegRates

`func (o *ProfileEnrollmentType) GetInheritedNegRates() bool`

GetInheritedNegRates returns the InheritedNegRates field if non-nil, zero value otherwise.

### GetInheritedNegRatesOk

`func (o *ProfileEnrollmentType) GetInheritedNegRatesOk() (*bool, bool)`

GetInheritedNegRatesOk returns a tuple with the InheritedNegRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritedNegRates

`func (o *ProfileEnrollmentType) SetInheritedNegRates(v bool)`

SetInheritedNegRates sets InheritedNegRates field to given value.

### HasInheritedNegRates

`func (o *ProfileEnrollmentType) HasInheritedNegRates() bool`

HasInheritedNegRates returns a boolean if a field has been set.

### GetKeywords

`func (o *ProfileEnrollmentType) GetKeywords() CompanyProfileTypeKeywords`

GetKeywords returns the Keywords field if non-nil, zero value otherwise.

### GetKeywordsOk

`func (o *ProfileEnrollmentType) GetKeywordsOk() (*CompanyProfileTypeKeywords, bool)`

GetKeywordsOk returns a tuple with the Keywords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywords

`func (o *ProfileEnrollmentType) SetKeywords(v CompanyProfileTypeKeywords)`

SetKeywords sets Keywords field to given value.

### HasKeywords

`func (o *ProfileEnrollmentType) HasKeywords() bool`

HasKeywords returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ProfileEnrollmentType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ProfileEnrollmentType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ProfileEnrollmentType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ProfileEnrollmentType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ProfileEnrollmentType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ProfileEnrollmentType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ProfileEnrollmentType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ProfileEnrollmentType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastStayInfo

`func (o *ProfileEnrollmentType) GetLastStayInfo() LastStayInfoType`

GetLastStayInfo returns the LastStayInfo field if non-nil, zero value otherwise.

### GetLastStayInfoOk

`func (o *ProfileEnrollmentType) GetLastStayInfoOk() (*LastStayInfoType, bool)`

GetLastStayInfoOk returns a tuple with the LastStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayInfo

`func (o *ProfileEnrollmentType) SetLastStayInfo(v LastStayInfoType)`

SetLastStayInfo sets LastStayInfo field to given value.

### HasLastStayInfo

`func (o *ProfileEnrollmentType) HasLastStayInfo() bool`

HasLastStayInfo returns a boolean if a field has been set.

### GetLocalizationGuestType

`func (o *ProfileEnrollmentType) GetLocalizationGuestType() string`

GetLocalizationGuestType returns the LocalizationGuestType field if non-nil, zero value otherwise.

### GetLocalizationGuestTypeOk

`func (o *ProfileEnrollmentType) GetLocalizationGuestTypeOk() (*string, bool)`

GetLocalizationGuestTypeOk returns a tuple with the LocalizationGuestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizationGuestType

`func (o *ProfileEnrollmentType) SetLocalizationGuestType(v string)`

SetLocalizationGuestType sets LocalizationGuestType field to given value.

### HasLocalizationGuestType

`func (o *ProfileEnrollmentType) HasLocalizationGuestType() bool`

HasLocalizationGuestType returns a boolean if a field has been set.

### GetMailingActions

`func (o *ProfileEnrollmentType) GetMailingActions() MailingActionsType`

GetMailingActions returns the MailingActions field if non-nil, zero value otherwise.

### GetMailingActionsOk

`func (o *ProfileEnrollmentType) GetMailingActionsOk() (*MailingActionsType, bool)`

GetMailingActionsOk returns a tuple with the MailingActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingActions

`func (o *ProfileEnrollmentType) SetMailingActions(v MailingActionsType)`

SetMailingActions sets MailingActions field to given value.

### HasMailingActions

`func (o *ProfileEnrollmentType) HasMailingActions() bool`

HasMailingActions returns a boolean if a field has been set.

### GetMailingPreferences

`func (o *ProfileEnrollmentType) GetMailingPreferences() MailingPreferencesType`

GetMailingPreferences returns the MailingPreferences field if non-nil, zero value otherwise.

### GetMailingPreferencesOk

`func (o *ProfileEnrollmentType) GetMailingPreferencesOk() (*MailingPreferencesType, bool)`

GetMailingPreferencesOk returns a tuple with the MailingPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingPreferences

`func (o *ProfileEnrollmentType) SetMailingPreferences(v MailingPreferencesType)`

SetMailingPreferences sets MailingPreferences field to given value.

### HasMailingPreferences

`func (o *ProfileEnrollmentType) HasMailingPreferences() bool`

HasMailingPreferences returns a boolean if a field has been set.

### GetMarkAsRecentlyAccessed

`func (o *ProfileEnrollmentType) GetMarkAsRecentlyAccessed() bool`

GetMarkAsRecentlyAccessed returns the MarkAsRecentlyAccessed field if non-nil, zero value otherwise.

### GetMarkAsRecentlyAccessedOk

`func (o *ProfileEnrollmentType) GetMarkAsRecentlyAccessedOk() (*bool, bool)`

GetMarkAsRecentlyAccessedOk returns a tuple with the MarkAsRecentlyAccessed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkAsRecentlyAccessed

`func (o *ProfileEnrollmentType) SetMarkAsRecentlyAccessed(v bool)`

SetMarkAsRecentlyAccessed sets MarkAsRecentlyAccessed field to given value.

### HasMarkAsRecentlyAccessed

`func (o *ProfileEnrollmentType) HasMarkAsRecentlyAccessed() bool`

HasMarkAsRecentlyAccessed returns a boolean if a field has been set.

### GetMarkForHistory

`func (o *ProfileEnrollmentType) GetMarkForHistory() bool`

GetMarkForHistory returns the MarkForHistory field if non-nil, zero value otherwise.

### GetMarkForHistoryOk

`func (o *ProfileEnrollmentType) GetMarkForHistoryOk() (*bool, bool)`

GetMarkForHistoryOk returns a tuple with the MarkForHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkForHistory

`func (o *ProfileEnrollmentType) SetMarkForHistory(v bool)`

SetMarkForHistory sets MarkForHistory field to given value.

### HasMarkForHistory

`func (o *ProfileEnrollmentType) HasMarkForHistory() bool`

HasMarkForHistory returns a boolean if a field has been set.

### GetMembershipCardRegistrationCode

`func (o *ProfileEnrollmentType) GetMembershipCardRegistrationCode() string`

GetMembershipCardRegistrationCode returns the MembershipCardRegistrationCode field if non-nil, zero value otherwise.

### GetMembershipCardRegistrationCodeOk

`func (o *ProfileEnrollmentType) GetMembershipCardRegistrationCodeOk() (*string, bool)`

GetMembershipCardRegistrationCodeOk returns a tuple with the MembershipCardRegistrationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardRegistrationCode

`func (o *ProfileEnrollmentType) SetMembershipCardRegistrationCode(v string)`

SetMembershipCardRegistrationCode sets MembershipCardRegistrationCode field to given value.

### HasMembershipCardRegistrationCode

`func (o *ProfileEnrollmentType) HasMembershipCardRegistrationCode() bool`

HasMembershipCardRegistrationCode returns a boolean if a field has been set.

### GetNegotiatedRates

`func (o *ProfileEnrollmentType) GetNegotiatedRates() CompanyProfileTypeNegotiatedRates`

GetNegotiatedRates returns the NegotiatedRates field if non-nil, zero value otherwise.

### GetNegotiatedRatesOk

`func (o *ProfileEnrollmentType) GetNegotiatedRatesOk() (*CompanyProfileTypeNegotiatedRates, bool)`

GetNegotiatedRatesOk returns a tuple with the NegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRates

`func (o *ProfileEnrollmentType) SetNegotiatedRates(v CompanyProfileTypeNegotiatedRates)`

SetNegotiatedRates sets NegotiatedRates field to given value.

### HasNegotiatedRates

`func (o *ProfileEnrollmentType) HasNegotiatedRates() bool`

HasNegotiatedRates returns a boolean if a field has been set.

### GetOwnerCode

`func (o *ProfileEnrollmentType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *ProfileEnrollmentType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *ProfileEnrollmentType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *ProfileEnrollmentType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetPreferenceCollection

`func (o *ProfileEnrollmentType) GetPreferenceCollection() ProfileEnrollmentTypePreferenceCollection`

GetPreferenceCollection returns the PreferenceCollection field if non-nil, zero value otherwise.

### GetPreferenceCollectionOk

`func (o *ProfileEnrollmentType) GetPreferenceCollectionOk() (*ProfileEnrollmentTypePreferenceCollection, bool)`

GetPreferenceCollectionOk returns a tuple with the PreferenceCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollection

`func (o *ProfileEnrollmentType) SetPreferenceCollection(v ProfileEnrollmentTypePreferenceCollection)`

SetPreferenceCollection sets PreferenceCollection field to given value.

### HasPreferenceCollection

`func (o *ProfileEnrollmentType) HasPreferenceCollection() bool`

HasPreferenceCollection returns a boolean if a field has been set.

### GetPreviousHotelStays

`func (o *ProfileEnrollmentType) GetPreviousHotelStays() []HotelStayType`

GetPreviousHotelStays returns the PreviousHotelStays field if non-nil, zero value otherwise.

### GetPreviousHotelStaysOk

`func (o *ProfileEnrollmentType) GetPreviousHotelStaysOk() (*[]HotelStayType, bool)`

GetPreviousHotelStaysOk returns a tuple with the PreviousHotelStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousHotelStays

`func (o *ProfileEnrollmentType) SetPreviousHotelStays(v []HotelStayType)`

SetPreviousHotelStays sets PreviousHotelStays field to given value.

### HasPreviousHotelStays

`func (o *ProfileEnrollmentType) HasPreviousHotelStays() bool`

HasPreviousHotelStays returns a boolean if a field has been set.

### GetPrivacyInfo

`func (o *ProfileEnrollmentType) GetPrivacyInfo() PrivacyInfoType`

GetPrivacyInfo returns the PrivacyInfo field if non-nil, zero value otherwise.

### GetPrivacyInfoOk

`func (o *ProfileEnrollmentType) GetPrivacyInfoOk() (*PrivacyInfoType, bool)`

GetPrivacyInfoOk returns a tuple with the PrivacyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivacyInfo

`func (o *ProfileEnrollmentType) SetPrivacyInfo(v PrivacyInfoType)`

SetPrivacyInfo sets PrivacyInfo field to given value.

### HasPrivacyInfo

`func (o *ProfileEnrollmentType) HasPrivacyInfo() bool`

HasPrivacyInfo returns a boolean if a field has been set.

### GetProfileAccessType

`func (o *ProfileEnrollmentType) GetProfileAccessType() ProfileAccessType`

GetProfileAccessType returns the ProfileAccessType field if non-nil, zero value otherwise.

### GetProfileAccessTypeOk

`func (o *ProfileEnrollmentType) GetProfileAccessTypeOk() (*ProfileAccessType, bool)`

GetProfileAccessTypeOk returns a tuple with the ProfileAccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccessType

`func (o *ProfileEnrollmentType) SetProfileAccessType(v ProfileAccessType)`

SetProfileAccessType sets ProfileAccessType field to given value.

### HasProfileAccessType

`func (o *ProfileEnrollmentType) HasProfileAccessType() bool`

HasProfileAccessType returns a boolean if a field has been set.

### GetProfileDeliveryMethods

`func (o *ProfileEnrollmentType) GetProfileDeliveryMethods() ProfileEnrollmentTypeProfileDeliveryMethods`

GetProfileDeliveryMethods returns the ProfileDeliveryMethods field if non-nil, zero value otherwise.

### GetProfileDeliveryMethodsOk

`func (o *ProfileEnrollmentType) GetProfileDeliveryMethodsOk() (*ProfileEnrollmentTypeProfileDeliveryMethods, bool)`

GetProfileDeliveryMethodsOk returns a tuple with the ProfileDeliveryMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDeliveryMethods

`func (o *ProfileEnrollmentType) SetProfileDeliveryMethods(v ProfileEnrollmentTypeProfileDeliveryMethods)`

SetProfileDeliveryMethods sets ProfileDeliveryMethods field to given value.

### HasProfileDeliveryMethods

`func (o *ProfileEnrollmentType) HasProfileDeliveryMethods() bool`

HasProfileDeliveryMethods returns a boolean if a field has been set.

### GetProfileId

`func (o *ProfileEnrollmentType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ProfileEnrollmentType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ProfileEnrollmentType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ProfileEnrollmentType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetProfileImage

`func (o *ProfileEnrollmentType) GetProfileImage() ImageSetType`

GetProfileImage returns the ProfileImage field if non-nil, zero value otherwise.

### GetProfileImageOk

`func (o *ProfileEnrollmentType) GetProfileImageOk() (*ImageSetType, bool)`

GetProfileImageOk returns a tuple with the ProfileImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileImage

`func (o *ProfileEnrollmentType) SetProfileImage(v ImageSetType)`

SetProfileImage sets ProfileImage field to given value.

### HasProfileImage

`func (o *ProfileEnrollmentType) HasProfileImage() bool`

HasProfileImage returns a boolean if a field has been set.

### GetProfileIndicators

`func (o *ProfileEnrollmentType) GetProfileIndicators() []IndicatorType`

GetProfileIndicators returns the ProfileIndicators field if non-nil, zero value otherwise.

### GetProfileIndicatorsOk

`func (o *ProfileEnrollmentType) GetProfileIndicatorsOk() (*[]IndicatorType, bool)`

GetProfileIndicatorsOk returns a tuple with the ProfileIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIndicators

`func (o *ProfileEnrollmentType) SetProfileIndicators(v []IndicatorType)`

SetProfileIndicators sets ProfileIndicators field to given value.

### HasProfileIndicators

`func (o *ProfileEnrollmentType) HasProfileIndicators() bool`

HasProfileIndicators returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *ProfileEnrollmentType) GetProfileMemberships() ProfileEnrollmentTypeProfileMemberships`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *ProfileEnrollmentType) GetProfileMembershipsOk() (*ProfileEnrollmentTypeProfileMemberships, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *ProfileEnrollmentType) SetProfileMemberships(v ProfileEnrollmentTypeProfileMemberships)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *ProfileEnrollmentType) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetProfileRestrictions

`func (o *ProfileEnrollmentType) GetProfileRestrictions() ProfileRestrictions`

GetProfileRestrictions returns the ProfileRestrictions field if non-nil, zero value otherwise.

### GetProfileRestrictionsOk

`func (o *ProfileEnrollmentType) GetProfileRestrictionsOk() (*ProfileRestrictions, bool)`

GetProfileRestrictionsOk returns a tuple with the ProfileRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictions

`func (o *ProfileEnrollmentType) SetProfileRestrictions(v ProfileRestrictions)`

SetProfileRestrictions sets ProfileRestrictions field to given value.

### HasProfileRestrictions

`func (o *ProfileEnrollmentType) HasProfileRestrictions() bool`

HasProfileRestrictions returns a boolean if a field has been set.

### GetProfileType

`func (o *ProfileEnrollmentType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ProfileEnrollmentType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ProfileEnrollmentType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ProfileEnrollmentType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetProtectedBy

`func (o *ProfileEnrollmentType) GetProtectedBy() string`

GetProtectedBy returns the ProtectedBy field if non-nil, zero value otherwise.

### GetProtectedByOk

`func (o *ProfileEnrollmentType) GetProtectedByOk() (*string, bool)`

GetProtectedByOk returns a tuple with the ProtectedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectedBy

`func (o *ProfileEnrollmentType) SetProtectedBy(v string)`

SetProtectedBy sets ProtectedBy field to given value.

### HasProtectedBy

`func (o *ProfileEnrollmentType) HasProtectedBy() bool`

HasProtectedBy returns a boolean if a field has been set.

### GetRegisteredProperty

`func (o *ProfileEnrollmentType) GetRegisteredProperty() string`

GetRegisteredProperty returns the RegisteredProperty field if non-nil, zero value otherwise.

### GetRegisteredPropertyOk

`func (o *ProfileEnrollmentType) GetRegisteredPropertyOk() (*string, bool)`

GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredProperty

`func (o *ProfileEnrollmentType) SetRegisteredProperty(v string)`

SetRegisteredProperty sets RegisteredProperty field to given value.

### HasRegisteredProperty

`func (o *ProfileEnrollmentType) HasRegisteredProperty() bool`

HasRegisteredProperty returns a boolean if a field has been set.

### GetRelationships

`func (o *ProfileEnrollmentType) GetRelationships() CompanyProfileTypeRelationships`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *ProfileEnrollmentType) GetRelationshipsOk() (*CompanyProfileTypeRelationships, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *ProfileEnrollmentType) SetRelationships(v CompanyProfileTypeRelationships)`

SetRelationships sets Relationships field to given value.

### HasRelationships

`func (o *ProfileEnrollmentType) HasRelationships() bool`

HasRelationships returns a boolean if a field has been set.

### GetRelationshipsSummary

`func (o *ProfileEnrollmentType) GetRelationshipsSummary() ProfileEnrollmentTypeRelationshipsSummary`

GetRelationshipsSummary returns the RelationshipsSummary field if non-nil, zero value otherwise.

### GetRelationshipsSummaryOk

`func (o *ProfileEnrollmentType) GetRelationshipsSummaryOk() (*ProfileEnrollmentTypeRelationshipsSummary, bool)`

GetRelationshipsSummaryOk returns a tuple with the RelationshipsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipsSummary

`func (o *ProfileEnrollmentType) SetRelationshipsSummary(v ProfileEnrollmentTypeRelationshipsSummary)`

SetRelationshipsSummary sets RelationshipsSummary field to given value.

### HasRelationshipsSummary

`func (o *ProfileEnrollmentType) HasRelationshipsSummary() bool`

HasRelationshipsSummary returns a boolean if a field has been set.

### GetRequestForHotel

`func (o *ProfileEnrollmentType) GetRequestForHotel() string`

GetRequestForHotel returns the RequestForHotel field if non-nil, zero value otherwise.

### GetRequestForHotelOk

`func (o *ProfileEnrollmentType) GetRequestForHotelOk() (*string, bool)`

GetRequestForHotelOk returns a tuple with the RequestForHotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestForHotel

`func (o *ProfileEnrollmentType) SetRequestForHotel(v string)`

SetRequestForHotel sets RequestForHotel field to given value.

### HasRequestForHotel

`func (o *ProfileEnrollmentType) HasRequestForHotel() bool`

HasRequestForHotel returns a boolean if a field has been set.

### GetReservationId

`func (o *ProfileEnrollmentType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ProfileEnrollmentType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ProfileEnrollmentType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ProfileEnrollmentType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationInfoList

`func (o *ProfileEnrollmentType) GetReservationInfoList() ReservationHistoryFutureInfoType`

GetReservationInfoList returns the ReservationInfoList field if non-nil, zero value otherwise.

### GetReservationInfoListOk

`func (o *ProfileEnrollmentType) GetReservationInfoListOk() (*ReservationHistoryFutureInfoType, bool)`

GetReservationInfoListOk returns a tuple with the ReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfoList

`func (o *ProfileEnrollmentType) SetReservationInfoList(v ReservationHistoryFutureInfoType)`

SetReservationInfoList sets ReservationInfoList field to given value.

### HasReservationInfoList

`func (o *ProfileEnrollmentType) HasReservationInfoList() bool`

HasReservationInfoList returns a boolean if a field has been set.

### GetRewardsInfo

`func (o *ProfileEnrollmentType) GetRewardsInfo() RewardsInfoType`

GetRewardsInfo returns the RewardsInfo field if non-nil, zero value otherwise.

### GetRewardsInfoOk

`func (o *ProfileEnrollmentType) GetRewardsInfoOk() (*RewardsInfoType, bool)`

GetRewardsInfoOk returns a tuple with the RewardsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRewardsInfo

`func (o *ProfileEnrollmentType) SetRewardsInfo(v RewardsInfoType)`

SetRewardsInfo sets RewardsInfo field to given value.

### HasRewardsInfo

`func (o *ProfileEnrollmentType) HasRewardsInfo() bool`

HasRewardsInfo returns a boolean if a field has been set.

### GetRoomOwnershipsList

`func (o *ProfileEnrollmentType) GetRoomOwnershipsList() ProfileEnrollmentTypeRoomOwnershipsList`

GetRoomOwnershipsList returns the RoomOwnershipsList field if non-nil, zero value otherwise.

### GetRoomOwnershipsListOk

`func (o *ProfileEnrollmentType) GetRoomOwnershipsListOk() (*ProfileEnrollmentTypeRoomOwnershipsList, bool)`

GetRoomOwnershipsListOk returns a tuple with the RoomOwnershipsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipsList

`func (o *ProfileEnrollmentType) SetRoomOwnershipsList(v ProfileEnrollmentTypeRoomOwnershipsList)`

SetRoomOwnershipsList sets RoomOwnershipsList field to given value.

### HasRoomOwnershipsList

`func (o *ProfileEnrollmentType) HasRoomOwnershipsList() bool`

HasRoomOwnershipsList returns a boolean if a field has been set.

### GetRoomPreferences

`func (o *ProfileEnrollmentType) GetRoomPreferences() RoomPreferencesType`

GetRoomPreferences returns the RoomPreferences field if non-nil, zero value otherwise.

### GetRoomPreferencesOk

`func (o *ProfileEnrollmentType) GetRoomPreferencesOk() (*RoomPreferencesType, bool)`

GetRoomPreferencesOk returns a tuple with the RoomPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPreferences

`func (o *ProfileEnrollmentType) SetRoomPreferences(v RoomPreferencesType)`

SetRoomPreferences sets RoomPreferences field to given value.

### HasRoomPreferences

`func (o *ProfileEnrollmentType) HasRoomPreferences() bool`

HasRoomPreferences returns a boolean if a field has been set.

### GetSalesInfo

`func (o *ProfileEnrollmentType) GetSalesInfo() SalesInfoType`

GetSalesInfo returns the SalesInfo field if non-nil, zero value otherwise.

### GetSalesInfoOk

`func (o *ProfileEnrollmentType) GetSalesInfoOk() (*SalesInfoType, bool)`

GetSalesInfoOk returns a tuple with the SalesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesInfo

`func (o *ProfileEnrollmentType) SetSalesInfo(v SalesInfoType)`

SetSalesInfo sets SalesInfo field to given value.

### HasSalesInfo

`func (o *ProfileEnrollmentType) HasSalesInfo() bool`

HasSalesInfo returns a boolean if a field has been set.

### GetShowInactiveRoomOwners

`func (o *ProfileEnrollmentType) GetShowInactiveRoomOwners() bool`

GetShowInactiveRoomOwners returns the ShowInactiveRoomOwners field if non-nil, zero value otherwise.

### GetShowInactiveRoomOwnersOk

`func (o *ProfileEnrollmentType) GetShowInactiveRoomOwnersOk() (*bool, bool)`

GetShowInactiveRoomOwnersOk returns a tuple with the ShowInactiveRoomOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowInactiveRoomOwners

`func (o *ProfileEnrollmentType) SetShowInactiveRoomOwners(v bool)`

SetShowInactiveRoomOwners sets ShowInactiveRoomOwners field to given value.

### HasShowInactiveRoomOwners

`func (o *ProfileEnrollmentType) HasShowInactiveRoomOwners() bool`

HasShowInactiveRoomOwners returns a boolean if a field has been set.

### GetStatusCode

`func (o *ProfileEnrollmentType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *ProfileEnrollmentType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *ProfileEnrollmentType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *ProfileEnrollmentType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetStayReservationInfoList

`func (o *ProfileEnrollmentType) GetStayReservationInfoList() ReservationStayHistoryFutureInfoType`

GetStayReservationInfoList returns the StayReservationInfoList field if non-nil, zero value otherwise.

### GetStayReservationInfoListOk

`func (o *ProfileEnrollmentType) GetStayReservationInfoListOk() (*ReservationStayHistoryFutureInfoType, bool)`

GetStayReservationInfoListOk returns a tuple with the StayReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayReservationInfoList

`func (o *ProfileEnrollmentType) SetStayReservationInfoList(v ReservationStayHistoryFutureInfoType)`

SetStayReservationInfoList sets StayReservationInfoList field to given value.

### HasStayReservationInfoList

`func (o *ProfileEnrollmentType) HasStayReservationInfoList() bool`

HasStayReservationInfoList returns a boolean if a field has been set.

### GetSubscriptions

`func (o *ProfileEnrollmentType) GetSubscriptions() []ProfileSubscriptionType`

GetSubscriptions returns the Subscriptions field if non-nil, zero value otherwise.

### GetSubscriptionsOk

`func (o *ProfileEnrollmentType) GetSubscriptionsOk() (*[]ProfileSubscriptionType, bool)`

GetSubscriptionsOk returns a tuple with the Subscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptions

`func (o *ProfileEnrollmentType) SetSubscriptions(v []ProfileSubscriptionType)`

SetSubscriptions sets Subscriptions field to given value.

### HasSubscriptions

`func (o *ProfileEnrollmentType) HasSubscriptions() bool`

HasSubscriptions returns a boolean if a field has been set.

### GetTaxInfo

`func (o *ProfileEnrollmentType) GetTaxInfo() ProfileTaxInfoType`

GetTaxInfo returns the TaxInfo field if non-nil, zero value otherwise.

### GetTaxInfoOk

`func (o *ProfileEnrollmentType) GetTaxInfoOk() (*ProfileTaxInfoType, bool)`

GetTaxInfoOk returns a tuple with the TaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInfo

`func (o *ProfileEnrollmentType) SetTaxInfo(v ProfileTaxInfoType)`

SetTaxInfo sets TaxInfo field to given value.

### HasTaxInfo

`func (o *ProfileEnrollmentType) HasTaxInfo() bool`

HasTaxInfo returns a boolean if a field has been set.

### GetTelephones

`func (o *ProfileEnrollmentType) GetTelephones() ProfileEnrollmentTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *ProfileEnrollmentType) GetTelephonesOk() (*ProfileEnrollmentTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *ProfileEnrollmentType) SetTelephones(v ProfileEnrollmentTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *ProfileEnrollmentType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetTerritory

`func (o *ProfileEnrollmentType) GetTerritory() string`

GetTerritory returns the Territory field if non-nil, zero value otherwise.

### GetTerritoryOk

`func (o *ProfileEnrollmentType) GetTerritoryOk() (*string, bool)`

GetTerritoryOk returns a tuple with the Territory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerritory

`func (o *ProfileEnrollmentType) SetTerritory(v string)`

SetTerritory sets Territory field to given value.

### HasTerritory

`func (o *ProfileEnrollmentType) HasTerritory() bool`

HasTerritory returns a boolean if a field has been set.

### GetTraceCode

`func (o *ProfileEnrollmentType) GetTraceCode() string`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *ProfileEnrollmentType) GetTraceCodeOk() (*string, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *ProfileEnrollmentType) SetTraceCode(v string)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *ProfileEnrollmentType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetURLs

`func (o *ProfileEnrollmentType) GetURLs() CompanyProfileTypeURLs`

GetURLs returns the URLs field if non-nil, zero value otherwise.

### GetURLsOk

`func (o *ProfileEnrollmentType) GetURLsOk() (*CompanyProfileTypeURLs, bool)`

GetURLsOk returns a tuple with the URLs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLs

`func (o *ProfileEnrollmentType) SetURLs(v CompanyProfileTypeURLs)`

SetURLs sets URLs field to given value.

### HasURLs

`func (o *ProfileEnrollmentType) HasURLs() bool`

HasURLs returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *ProfileEnrollmentType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *ProfileEnrollmentType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *ProfileEnrollmentType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *ProfileEnrollmentType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetUserId

`func (o *ProfileEnrollmentType) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *ProfileEnrollmentType) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *ProfileEnrollmentType) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *ProfileEnrollmentType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetWebUserAccounts

`func (o *ProfileEnrollmentType) GetWebUserAccounts() []WebUserAccountType`

GetWebUserAccounts returns the WebUserAccounts field if non-nil, zero value otherwise.

### GetWebUserAccountsOk

`func (o *ProfileEnrollmentType) GetWebUserAccountsOk() (*[]WebUserAccountType, bool)`

GetWebUserAccountsOk returns a tuple with the WebUserAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebUserAccounts

`func (o *ProfileEnrollmentType) SetWebUserAccounts(v []WebUserAccountType)`

SetWebUserAccounts sets WebUserAccounts field to given value.

### HasWebUserAccounts

`func (o *ProfileEnrollmentType) HasWebUserAccounts() bool`

HasWebUserAccounts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

