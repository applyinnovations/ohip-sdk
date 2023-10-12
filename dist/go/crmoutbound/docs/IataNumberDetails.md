# IataNumberDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckIataNumberInfo** | Pointer to [**CheckIataNumberType**](CheckIataNumberType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewIataNumberDetails

`func NewIataNumberDetails() *IataNumberDetails`

NewIataNumberDetails instantiates a new IataNumberDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIataNumberDetailsWithDefaults

`func NewIataNumberDetailsWithDefaults() *IataNumberDetails`

NewIataNumberDetailsWithDefaults instantiates a new IataNumberDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckIataNumberInfo

`func (o *IataNumberDetails) GetCheckIataNumberInfo() CheckIataNumberType`

GetCheckIataNumberInfo returns the CheckIataNumberInfo field if non-nil, zero value otherwise.

### GetCheckIataNumberInfoOk

`func (o *IataNumberDetails) GetCheckIataNumberInfoOk() (*CheckIataNumberType, bool)`

GetCheckIataNumberInfoOk returns a tuple with the CheckIataNumberInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckIataNumberInfo

`func (o *IataNumberDetails) SetCheckIataNumberInfo(v CheckIataNumberType)`

SetCheckIataNumberInfo sets CheckIataNumberInfo field to given value.

### HasCheckIataNumberInfo

`func (o *IataNumberDetails) HasCheckIataNumberInfo() bool`

HasCheckIataNumberInfo returns a boolean if a field has been set.

### GetLinks

`func (o *IataNumberDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IataNumberDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IataNumberDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IataNumberDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *IataNumberDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *IataNumberDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *IataNumberDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *IataNumberDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


