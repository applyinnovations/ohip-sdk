# PostPayDaysRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayDays** | Pointer to [**[]PayDayType**](PayDayType.md) | List of Pay Days. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostPayDaysRequest

`func NewPostPayDaysRequest() *PostPayDaysRequest`

NewPostPayDaysRequest instantiates a new PostPayDaysRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostPayDaysRequestWithDefaults

`func NewPostPayDaysRequestWithDefaults() *PostPayDaysRequest`

NewPostPayDaysRequestWithDefaults instantiates a new PostPayDaysRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayDays

`func (o *PostPayDaysRequest) GetPayDays() []PayDayType`

GetPayDays returns the PayDays field if non-nil, zero value otherwise.

### GetPayDaysOk

`func (o *PostPayDaysRequest) GetPayDaysOk() (*[]PayDayType, bool)`

GetPayDaysOk returns a tuple with the PayDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayDays

`func (o *PostPayDaysRequest) SetPayDays(v []PayDayType)`

SetPayDays sets PayDays field to given value.

### HasPayDays

`func (o *PostPayDaysRequest) HasPayDays() bool`

HasPayDays returns a boolean if a field has been set.

### GetLinks

`func (o *PostPayDaysRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostPayDaysRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostPayDaysRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostPayDaysRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostPayDaysRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostPayDaysRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostPayDaysRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostPayDaysRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


