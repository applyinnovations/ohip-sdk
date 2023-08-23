# ProfileEnrollmentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Customer** | Pointer to [**CustomerType**](CustomerType.md) |  | [optional] 
**Addresses** | Pointer to [**GuestProfileTypeAddresses**](GuestProfileTypeAddresses.md) |  | [optional] 
**Telephones** | Pointer to [**ResCommunicationTypeTelephones**](ResCommunicationTypeTelephones.md) |  | [optional] 
**Emails** | Pointer to [**ResCommunicationTypeEmails**](ResCommunicationTypeEmails.md) |  | [optional] 
**Urls** | Pointer to [**ProfileEnrollmentTypeUrls**](ProfileEnrollmentTypeUrls.md) |  | [optional] 
**ProfileMemberships** | Pointer to [**ProfileEnrollmentTypeProfileMemberships**](ProfileEnrollmentTypeProfileMemberships.md) |  | [optional] 
**Keywords** | Pointer to [**ProfileTypeKeywords**](ProfileTypeKeywords.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**RegisteredProperty** | Pointer to **string** | Hotel which this profile is registered with. This attribute is not used for configuration. | [optional] 
**RequestForHotel** | Pointer to **string** | Hotel which this profile is to be registered. This attribute is only used during creation of profile. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EnrollmentCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ExternalDatabaseID** | Pointer to **string** | Enrollment details will be fetched from this External database. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code, It is used to filter hotel specific children to this specific hotel code. | [optional] 
**UserId** | Pointer to **string** | UserID/LoginID of the user who is enrolling the Guest. | [optional] 
**EmployeeId** | Pointer to **string** | EmployeeID of the user who is enrolling the Guest. | [optional] 

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

### GetAddresses

`func (o *ProfileEnrollmentType) GetAddresses() GuestProfileTypeAddresses`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *ProfileEnrollmentType) GetAddressesOk() (*GuestProfileTypeAddresses, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *ProfileEnrollmentType) SetAddresses(v GuestProfileTypeAddresses)`

SetAddresses sets Addresses field to given value.

### HasAddresses

`func (o *ProfileEnrollmentType) HasAddresses() bool`

HasAddresses returns a boolean if a field has been set.

### GetTelephones

`func (o *ProfileEnrollmentType) GetTelephones() ResCommunicationTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *ProfileEnrollmentType) GetTelephonesOk() (*ResCommunicationTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *ProfileEnrollmentType) SetTelephones(v ResCommunicationTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *ProfileEnrollmentType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetEmails

`func (o *ProfileEnrollmentType) GetEmails() ResCommunicationTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *ProfileEnrollmentType) GetEmailsOk() (*ResCommunicationTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *ProfileEnrollmentType) SetEmails(v ResCommunicationTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *ProfileEnrollmentType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.

### GetUrls

`func (o *ProfileEnrollmentType) GetUrls() ProfileEnrollmentTypeUrls`

GetUrls returns the Urls field if non-nil, zero value otherwise.

### GetUrlsOk

`func (o *ProfileEnrollmentType) GetUrlsOk() (*ProfileEnrollmentTypeUrls, bool)`

GetUrlsOk returns a tuple with the Urls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrls

`func (o *ProfileEnrollmentType) SetUrls(v ProfileEnrollmentTypeUrls)`

SetUrls sets Urls field to given value.

### HasUrls

`func (o *ProfileEnrollmentType) HasUrls() bool`

HasUrls returns a boolean if a field has been set.

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

### GetKeywords

`func (o *ProfileEnrollmentType) GetKeywords() ProfileTypeKeywords`

GetKeywords returns the Keywords field if non-nil, zero value otherwise.

### GetKeywordsOk

`func (o *ProfileEnrollmentType) GetKeywordsOk() (*ProfileTypeKeywords, bool)`

GetKeywordsOk returns a tuple with the Keywords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywords

`func (o *ProfileEnrollmentType) SetKeywords(v ProfileTypeKeywords)`

SetKeywords sets Keywords field to given value.

### HasKeywords

`func (o *ProfileEnrollmentType) HasKeywords() bool`

HasKeywords returns a boolean if a field has been set.

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

### GetCreateDateTime

`func (o *ProfileEnrollmentType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ProfileEnrollmentType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ProfileEnrollmentType) SetCreateDateTime(v time.Time)`

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

### GetLastModifyDateTime

`func (o *ProfileEnrollmentType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ProfileEnrollmentType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ProfileEnrollmentType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ProfileEnrollmentType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

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

### GetReservationId

`func (o *ProfileEnrollmentType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ProfileEnrollmentType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ProfileEnrollmentType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ProfileEnrollmentType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


