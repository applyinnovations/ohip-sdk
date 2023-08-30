# CallerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GivenName** | Pointer to **string** | Caller First Name. | [optional] 
**Surname** | Pointer to **string** | Caller Last Name. | [optional] 
**Phone** | Pointer to **string** | Caller Phone Number. | [optional] 
**Email** | Pointer to **string** | Caller Email. | [optional] 
**Fax** | Pointer to **string** | Caller Fax Number. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 

## Methods

### NewCallerType

`func NewCallerType() *CallerType`

NewCallerType instantiates a new CallerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallerTypeWithDefaults

`func NewCallerTypeWithDefaults() *CallerType`

NewCallerTypeWithDefaults instantiates a new CallerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGivenName

`func (o *CallerType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *CallerType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *CallerType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *CallerType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetSurname

`func (o *CallerType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *CallerType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *CallerType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *CallerType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### GetPhone

`func (o *CallerType) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CallerType) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CallerType) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *CallerType) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetEmail

`func (o *CallerType) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CallerType) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CallerType) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *CallerType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetFax

`func (o *CallerType) GetFax() string`

GetFax returns the Fax field if non-nil, zero value otherwise.

### GetFaxOk

`func (o *CallerType) GetFaxOk() (*string, bool)`

GetFaxOk returns a tuple with the Fax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFax

`func (o *CallerType) SetFax(v string)`

SetFax sets Fax field to given value.

### HasFax

`func (o *CallerType) HasFax() bool`

HasFax returns a boolean if a field has been set.

### GetUrl

`func (o *CallerType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CallerType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CallerType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CallerType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *CallerType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CallerType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CallerType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CallerType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *CallerType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *CallerType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *CallerType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *CallerType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *CallerType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *CallerType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *CallerType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *CallerType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *CallerType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CallerType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CallerType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CallerType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *CallerType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *CallerType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *CallerType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *CallerType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


