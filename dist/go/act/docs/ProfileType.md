# ProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | Pointer to [**ProfileTypeAddresses**](ProfileTypeAddresses.md) |  | [optional] 
**Company** | Pointer to [**CompanyType**](CompanyType.md) |  | [optional] 
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**EligibleForFiscalFolio** | Pointer to **string** | Eligible for Fiscal Folio/Payload generation. | [optional] 
**Emails** | Pointer to [**ProfileTypeEmails**](ProfileTypeEmails.md) |  | [optional] 
**ProfileDeliveryMethods** | Pointer to [**ProfileTypeProfileDeliveryMethods**](ProfileTypeProfileDeliveryMethods.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**Relationships** | Pointer to [**ProfileTypeRelationships**](ProfileTypeRelationships.md) |  | [optional] 
**RelationshipsSummary** | Pointer to [**ProfileTypeRelationshipsSummary**](ProfileTypeRelationshipsSummary.md) |  | [optional] 
**StayReservationInfoList** | Pointer to [**ReservationStayHistoryFutureInfoType**](ReservationStayHistoryFutureInfoType.md) |  | [optional] 
**Telephones** | Pointer to [**ProfileTypeTelephones**](ProfileTypeTelephones.md) |  | [optional] 
**URLs** | Pointer to [**ProfileTypeURLs**](ProfileTypeURLs.md) |  | [optional] 

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

### GetEligibleForFiscalFolio

`func (o *ProfileType) GetEligibleForFiscalFolio() string`

GetEligibleForFiscalFolio returns the EligibleForFiscalFolio field if non-nil, zero value otherwise.

### GetEligibleForFiscalFolioOk

`func (o *ProfileType) GetEligibleForFiscalFolioOk() (*string, bool)`

GetEligibleForFiscalFolioOk returns a tuple with the EligibleForFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEligibleForFiscalFolio

`func (o *ProfileType) SetEligibleForFiscalFolio(v string)`

SetEligibleForFiscalFolio sets EligibleForFiscalFolio field to given value.

### HasEligibleForFiscalFolio

`func (o *ProfileType) HasEligibleForFiscalFolio() bool`

HasEligibleForFiscalFolio returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


