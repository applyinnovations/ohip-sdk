# FetchOXIListOfValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ListOfValues** | Pointer to [**ListOfValuesType**](ListOfValuesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchOXIListOfValues

`func NewFetchOXIListOfValues() *FetchOXIListOfValues`

NewFetchOXIListOfValues instantiates a new FetchOXIListOfValues object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchOXIListOfValuesWithDefaults

`func NewFetchOXIListOfValuesWithDefaults() *FetchOXIListOfValues`

NewFetchOXIListOfValuesWithDefaults instantiates a new FetchOXIListOfValues object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetListOfValues

`func (o *FetchOXIListOfValues) GetListOfValues() ListOfValuesType`

GetListOfValues returns the ListOfValues field if non-nil, zero value otherwise.

### GetListOfValuesOk

`func (o *FetchOXIListOfValues) GetListOfValuesOk() (*ListOfValuesType, bool)`

GetListOfValuesOk returns a tuple with the ListOfValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListOfValues

`func (o *FetchOXIListOfValues) SetListOfValues(v ListOfValuesType)`

SetListOfValues sets ListOfValues field to given value.

### HasListOfValues

`func (o *FetchOXIListOfValues) HasListOfValues() bool`

HasListOfValues returns a boolean if a field has been set.

### GetLinks

`func (o *FetchOXIListOfValues) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchOXIListOfValues) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchOXIListOfValues) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchOXIListOfValues) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchOXIListOfValues) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchOXIListOfValues) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchOXIListOfValues) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchOXIListOfValues) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


