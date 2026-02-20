# ResCommunicationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Telephones** | Pointer to [**ResCommunicationTypeTelephones**](ResCommunicationTypeTelephones.md) |  | [optional] 
**Emails** | Pointer to [**ResCommunicationTypeEmails**](ResCommunicationTypeEmails.md) |  | [optional] 

## Methods

### NewResCommunicationType

`func NewResCommunicationType() *ResCommunicationType`

NewResCommunicationType instantiates a new ResCommunicationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResCommunicationTypeWithDefaults

`func NewResCommunicationTypeWithDefaults() *ResCommunicationType`

NewResCommunicationTypeWithDefaults instantiates a new ResCommunicationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephones

`func (o *ResCommunicationType) GetTelephones() ResCommunicationTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *ResCommunicationType) GetTelephonesOk() (*ResCommunicationTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *ResCommunicationType) SetTelephones(v ResCommunicationTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *ResCommunicationType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetEmails

`func (o *ResCommunicationType) GetEmails() ResCommunicationTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *ResCommunicationType) GetEmailsOk() (*ResCommunicationTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *ResCommunicationType) SetEmails(v ResCommunicationTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *ResCommunicationType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


