# FetchedExternalDatabaseAvailableProperties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailailableProperties** | Pointer to [**[]ExternalDatabaseAssociatedHotelType**](ExternalDatabaseAssociatedHotelType.md) | Collection of Hotel for external database. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedExternalDatabaseAvailableProperties

`func NewFetchedExternalDatabaseAvailableProperties() *FetchedExternalDatabaseAvailableProperties`

NewFetchedExternalDatabaseAvailableProperties instantiates a new FetchedExternalDatabaseAvailableProperties object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedExternalDatabaseAvailablePropertiesWithDefaults

`func NewFetchedExternalDatabaseAvailablePropertiesWithDefaults() *FetchedExternalDatabaseAvailableProperties`

NewFetchedExternalDatabaseAvailablePropertiesWithDefaults instantiates a new FetchedExternalDatabaseAvailableProperties object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailailableProperties

`func (o *FetchedExternalDatabaseAvailableProperties) GetAvailailableProperties() []ExternalDatabaseAssociatedHotelType`

GetAvailailableProperties returns the AvailailableProperties field if non-nil, zero value otherwise.

### GetAvailailablePropertiesOk

`func (o *FetchedExternalDatabaseAvailableProperties) GetAvailailablePropertiesOk() (*[]ExternalDatabaseAssociatedHotelType, bool)`

GetAvailailablePropertiesOk returns a tuple with the AvailailableProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailailableProperties

`func (o *FetchedExternalDatabaseAvailableProperties) SetAvailailableProperties(v []ExternalDatabaseAssociatedHotelType)`

SetAvailailableProperties sets AvailailableProperties field to given value.

### HasAvailailableProperties

`func (o *FetchedExternalDatabaseAvailableProperties) HasAvailailableProperties() bool`

HasAvailailableProperties returns a boolean if a field has been set.

### GetLinks

`func (o *FetchedExternalDatabaseAvailableProperties) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedExternalDatabaseAvailableProperties) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedExternalDatabaseAvailableProperties) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedExternalDatabaseAvailableProperties) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedExternalDatabaseAvailableProperties) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedExternalDatabaseAvailableProperties) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedExternalDatabaseAvailableProperties) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedExternalDatabaseAvailableProperties) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


