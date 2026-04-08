# EarlyDepartureInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EarlyDepartureDetails** | Pointer to [**EarlyDepartureInfoType**](EarlyDepartureInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEarlyDepartureInfo

`func NewEarlyDepartureInfo() *EarlyDepartureInfo`

NewEarlyDepartureInfo instantiates a new EarlyDepartureInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEarlyDepartureInfoWithDefaults

`func NewEarlyDepartureInfoWithDefaults() *EarlyDepartureInfo`

NewEarlyDepartureInfoWithDefaults instantiates a new EarlyDepartureInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEarlyDepartureDetails

`func (o *EarlyDepartureInfo) GetEarlyDepartureDetails() EarlyDepartureInfoType`

GetEarlyDepartureDetails returns the EarlyDepartureDetails field if non-nil, zero value otherwise.

### GetEarlyDepartureDetailsOk

`func (o *EarlyDepartureInfo) GetEarlyDepartureDetailsOk() (*EarlyDepartureInfoType, bool)`

GetEarlyDepartureDetailsOk returns a tuple with the EarlyDepartureDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarlyDepartureDetails

`func (o *EarlyDepartureInfo) SetEarlyDepartureDetails(v EarlyDepartureInfoType)`

SetEarlyDepartureDetails sets EarlyDepartureDetails field to given value.

### HasEarlyDepartureDetails

`func (o *EarlyDepartureInfo) HasEarlyDepartureDetails() bool`

HasEarlyDepartureDetails returns a boolean if a field has been set.

### GetLinks

`func (o *EarlyDepartureInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EarlyDepartureInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EarlyDepartureInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EarlyDepartureInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EarlyDepartureInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EarlyDepartureInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EarlyDepartureInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EarlyDepartureInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


