# PutActivityTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityTypes** | Pointer to [**[]ActivityTypeDetailType**](ActivityTypeDetailType.md) | Collection of Activity Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutActivityTypesRequest

`func NewPutActivityTypesRequest() *PutActivityTypesRequest`

NewPutActivityTypesRequest instantiates a new PutActivityTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutActivityTypesRequestWithDefaults

`func NewPutActivityTypesRequestWithDefaults() *PutActivityTypesRequest`

NewPutActivityTypesRequestWithDefaults instantiates a new PutActivityTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityTypes

`func (o *PutActivityTypesRequest) GetActivityTypes() []ActivityTypeDetailType`

GetActivityTypes returns the ActivityTypes field if non-nil, zero value otherwise.

### GetActivityTypesOk

`func (o *PutActivityTypesRequest) GetActivityTypesOk() (*[]ActivityTypeDetailType, bool)`

GetActivityTypesOk returns a tuple with the ActivityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTypes

`func (o *PutActivityTypesRequest) SetActivityTypes(v []ActivityTypeDetailType)`

SetActivityTypes sets ActivityTypes field to given value.

### HasActivityTypes

`func (o *PutActivityTypesRequest) HasActivityTypes() bool`

HasActivityTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PutActivityTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutActivityTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutActivityTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutActivityTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutActivityTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutActivityTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutActivityTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutActivityTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


