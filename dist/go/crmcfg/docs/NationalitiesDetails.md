# NationalitiesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Nationalities** | Pointer to [**[]NationalityType**](NationalityType.md) | List of Nationalities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNationalitiesDetails

`func NewNationalitiesDetails() *NationalitiesDetails`

NewNationalitiesDetails instantiates a new NationalitiesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNationalitiesDetailsWithDefaults

`func NewNationalitiesDetailsWithDefaults() *NationalitiesDetails`

NewNationalitiesDetailsWithDefaults instantiates a new NationalitiesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *NationalitiesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NationalitiesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NationalitiesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NationalitiesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNationalities

`func (o *NationalitiesDetails) GetNationalities() []NationalityType`

GetNationalities returns the Nationalities field if non-nil, zero value otherwise.

### GetNationalitiesOk

`func (o *NationalitiesDetails) GetNationalitiesOk() (*[]NationalityType, bool)`

GetNationalitiesOk returns a tuple with the Nationalities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationalities

`func (o *NationalitiesDetails) SetNationalities(v []NationalityType)`

SetNationalities sets Nationalities field to given value.

### HasNationalities

`func (o *NationalitiesDetails) HasNationalities() bool`

HasNationalities returns a boolean if a field has been set.

### GetWarnings

`func (o *NationalitiesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NationalitiesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NationalitiesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NationalitiesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


