# StagedProfileIdentificationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identification** | Pointer to [**IdentificationType**](IdentificationType.md) |  | [optional] 
**ErrorDescription** | Pointer to **string** | The error in negotiated rate information in a staged profile with an invalid status | [optional] 
**DocumentResort** | Pointer to **string** | Hotel code to which the document belongs. | [optional] 
**InactiveDate** | Pointer to **string** | The date when the record was inactivated. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileIdentificationsType

`func NewStagedProfileIdentificationsType() *StagedProfileIdentificationsType`

NewStagedProfileIdentificationsType instantiates a new StagedProfileIdentificationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileIdentificationsTypeWithDefaults

`func NewStagedProfileIdentificationsTypeWithDefaults() *StagedProfileIdentificationsType`

NewStagedProfileIdentificationsTypeWithDefaults instantiates a new StagedProfileIdentificationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentification

`func (o *StagedProfileIdentificationsType) GetIdentification() IdentificationType`

GetIdentification returns the Identification field if non-nil, zero value otherwise.

### GetIdentificationOk

`func (o *StagedProfileIdentificationsType) GetIdentificationOk() (*IdentificationType, bool)`

GetIdentificationOk returns a tuple with the Identification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentification

`func (o *StagedProfileIdentificationsType) SetIdentification(v IdentificationType)`

SetIdentification sets Identification field to given value.

### HasIdentification

`func (o *StagedProfileIdentificationsType) HasIdentification() bool`

HasIdentification returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileIdentificationsType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileIdentificationsType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileIdentificationsType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileIdentificationsType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetDocumentResort

`func (o *StagedProfileIdentificationsType) GetDocumentResort() string`

GetDocumentResort returns the DocumentResort field if non-nil, zero value otherwise.

### GetDocumentResortOk

`func (o *StagedProfileIdentificationsType) GetDocumentResortOk() (*string, bool)`

GetDocumentResortOk returns a tuple with the DocumentResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentResort

`func (o *StagedProfileIdentificationsType) SetDocumentResort(v string)`

SetDocumentResort sets DocumentResort field to given value.

### HasDocumentResort

`func (o *StagedProfileIdentificationsType) HasDocumentResort() bool`

HasDocumentResort returns a boolean if a field has been set.

### GetInactiveDate

`func (o *StagedProfileIdentificationsType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *StagedProfileIdentificationsType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *StagedProfileIdentificationsType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *StagedProfileIdentificationsType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileIdentificationsType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileIdentificationsType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileIdentificationsType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileIdentificationsType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileIdentificationsType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileIdentificationsType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileIdentificationsType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileIdentificationsType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


