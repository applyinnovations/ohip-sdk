# PutPayDaysRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PayDays** | Pointer to [**[]PayDayType**](PayDayType.md) | List of Pay Days. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutPayDaysRequest

`func NewPutPayDaysRequest() *PutPayDaysRequest`

NewPutPayDaysRequest instantiates a new PutPayDaysRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPayDaysRequestWithDefaults

`func NewPutPayDaysRequestWithDefaults() *PutPayDaysRequest`

NewPutPayDaysRequestWithDefaults instantiates a new PutPayDaysRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutPayDaysRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutPayDaysRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutPayDaysRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutPayDaysRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPayDays

`func (o *PutPayDaysRequest) GetPayDays() []PayDayType`

GetPayDays returns the PayDays field if non-nil, zero value otherwise.

### GetPayDaysOk

`func (o *PutPayDaysRequest) GetPayDaysOk() (*[]PayDayType, bool)`

GetPayDaysOk returns a tuple with the PayDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayDays

`func (o *PutPayDaysRequest) SetPayDays(v []PayDayType)`

SetPayDays sets PayDays field to given value.

### HasPayDays

`func (o *PutPayDaysRequest) HasPayDays() bool`

HasPayDays returns a boolean if a field has been set.

### GetWarnings

`func (o *PutPayDaysRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutPayDaysRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutPayDaysRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutPayDaysRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


