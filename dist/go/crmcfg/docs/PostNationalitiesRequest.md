# PostNationalitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Nationalities** | Pointer to [**[]NationalityType**](NationalityType.md) | List of Nationalities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostNationalitiesRequest

`func NewPostNationalitiesRequest() *PostNationalitiesRequest`

NewPostNationalitiesRequest instantiates a new PostNationalitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostNationalitiesRequestWithDefaults

`func NewPostNationalitiesRequestWithDefaults() *PostNationalitiesRequest`

NewPostNationalitiesRequestWithDefaults instantiates a new PostNationalitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostNationalitiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostNationalitiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostNationalitiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostNationalitiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNationalities

`func (o *PostNationalitiesRequest) GetNationalities() []NationalityType`

GetNationalities returns the Nationalities field if non-nil, zero value otherwise.

### GetNationalitiesOk

`func (o *PostNationalitiesRequest) GetNationalitiesOk() (*[]NationalityType, bool)`

GetNationalitiesOk returns a tuple with the Nationalities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationalities

`func (o *PostNationalitiesRequest) SetNationalities(v []NationalityType)`

SetNationalities sets Nationalities field to given value.

### HasNationalities

`func (o *PostNationalitiesRequest) HasNationalities() bool`

HasNationalities returns a boolean if a field has been set.

### GetWarnings

`func (o *PostNationalitiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostNationalitiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostNationalitiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostNationalitiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


