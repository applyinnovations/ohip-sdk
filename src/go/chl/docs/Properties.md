# Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Properties** | Pointer to [**PropertiesMappingType**](PropertiesMappingType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewProperties

`func NewProperties() *Properties`

NewProperties instantiates a new Properties object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertiesWithDefaults

`func NewPropertiesWithDefaults() *Properties`

NewPropertiesWithDefaults instantiates a new Properties object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *Properties) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Properties) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Properties) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Properties) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProperties

`func (o *Properties) GetProperties() PropertiesMappingType`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *Properties) GetPropertiesOk() (*PropertiesMappingType, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *Properties) SetProperties(v PropertiesMappingType)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *Properties) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetWarnings

`func (o *Properties) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Properties) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Properties) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Properties) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


