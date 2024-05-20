# PrintReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Destination** | Pointer to [**PrintDestinationType**](PrintDestinationType.md) |  | [optional] 
**Copies** | Pointer to **int32** | Number of copies to be printed or sent. | [optional] 
**Sent** | Pointer to **bool** | Indicates whether report has already been sent or not. | [optional] 

## Methods

### NewPrintReportType

`func NewPrintReportType() *PrintReportType`

NewPrintReportType instantiates a new PrintReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrintReportTypeWithDefaults

`func NewPrintReportTypeWithDefaults() *PrintReportType`

NewPrintReportTypeWithDefaults instantiates a new PrintReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestination

`func (o *PrintReportType) GetDestination() PrintDestinationType`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *PrintReportType) GetDestinationOk() (*PrintDestinationType, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *PrintReportType) SetDestination(v PrintDestinationType)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *PrintReportType) HasDestination() bool`

HasDestination returns a boolean if a field has been set.

### GetCopies

`func (o *PrintReportType) GetCopies() int32`

GetCopies returns the Copies field if non-nil, zero value otherwise.

### GetCopiesOk

`func (o *PrintReportType) GetCopiesOk() (*int32, bool)`

GetCopiesOk returns a tuple with the Copies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopies

`func (o *PrintReportType) SetCopies(v int32)`

SetCopies sets Copies field to given value.

### HasCopies

`func (o *PrintReportType) HasCopies() bool`

HasCopies returns a boolean if a field has been set.

### GetSent

`func (o *PrintReportType) GetSent() bool`

GetSent returns the Sent field if non-nil, zero value otherwise.

### GetSentOk

`func (o *PrintReportType) GetSentOk() (*bool, bool)`

GetSentOk returns a tuple with the Sent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSent

`func (o *PrintReportType) SetSent(v bool)`

SetSent sets Sent field to given value.

### HasSent

`func (o *PrintReportType) HasSent() bool`

HasSent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


