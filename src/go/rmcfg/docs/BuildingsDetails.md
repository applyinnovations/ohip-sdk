# BuildingsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Buildings** | Pointer to [**BuildingsType**](BuildingsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBuildingsDetails

`func NewBuildingsDetails() *BuildingsDetails`

NewBuildingsDetails instantiates a new BuildingsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBuildingsDetailsWithDefaults

`func NewBuildingsDetailsWithDefaults() *BuildingsDetails`

NewBuildingsDetailsWithDefaults instantiates a new BuildingsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBuildings

`func (o *BuildingsDetails) GetBuildings() BuildingsType`

GetBuildings returns the Buildings field if non-nil, zero value otherwise.

### GetBuildingsOk

`func (o *BuildingsDetails) GetBuildingsOk() (*BuildingsType, bool)`

GetBuildingsOk returns a tuple with the Buildings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildings

`func (o *BuildingsDetails) SetBuildings(v BuildingsType)`

SetBuildings sets Buildings field to given value.

### HasBuildings

`func (o *BuildingsDetails) HasBuildings() bool`

HasBuildings returns a boolean if a field has been set.

### GetLinks

`func (o *BuildingsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BuildingsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BuildingsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BuildingsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BuildingsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BuildingsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BuildingsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BuildingsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


